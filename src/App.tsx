import { useState, useEffect, useRef } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth, db, signInWithGoogle, logout, handleFirestoreError, OperationType } from './firebase';
import { doc, getDoc, setDoc, onSnapshot, query, where, collection, getDocs, updateDoc, Timestamp } from 'firebase/firestore';
import { Trophy, Users, Plus, LogIn, LogOut, Settings, Play, IndianRupee, Shield, User as UserIcon, BarChart3, Search, ArrowLeftRight, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { nanoid } from 'nanoid';
import confetti from 'canvas-confetti';
import { IPL_PLAYERS, PlayerData } from './data/players';
import { cn, formatCurrency } from './lib/utils';
import { fetchLatestPlayerStats } from './services/geminiService';

// --- Types ---
type RoomStatus = 'lobby' | 'active' | 'paused' | 'finished';

interface RoomData {
  id: string;
  code: string;
  hostId: string;
  name: string;
  status: RoomStatus;
  maxTeams: number;
  baseBudget: number;
  currentPlayerId?: string;
  currentBid: number;
  currentBidderId?: string;
  bidStartTime?: any;
  expiryTime?: any;
  createdAt: any;
  lastSoldInfo?: {
    playerName: string;
    teamName: string;
    price: number;
    timestamp: number;
  };
  playerOrder?: string[];
}

interface TeamData {
  userId: string;
  userName: string;
  teamName: string;
  budgetRemaining: number;
  players: string[];
}

// --- Components ---

const CountdownTimer = ({ expiryTime, onTimeUp }: { expiryTime: any, onTimeUp?: () => void }) => {
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    if (!expiryTime) {
      setHasTriggered(false);
      return;
    }
    
    const interval = setInterval(() => {
      const expiry = expiryTime?.toDate?.()?.getTime() || expiryTime;
      const now = Date.now();
      const diff = Math.max(0, Math.ceil((expiry - now) / 1000));
      setTimeLeft(diff);

      if (diff === 0 && !hasTriggered && onTimeUp) {
        setHasTriggered(true);
        onTimeUp();
      }
    }, 100);

    return () => clearInterval(interval);
  }, [expiryTime, hasTriggered, onTimeUp]);

  useEffect(() => {
    setHasTriggered(false);
  }, [expiryTime]);

  return (
    <div className={cn(
      "text-4xl font-black tabular-nums transition-colors",
      timeLeft <= 5 ? "text-red-500 animate-pulse" : "text-white"
    )}>
      {timeLeft}s
    </div>
  );
};

const StatsSection = () => {
  const [search, setSearch] = useState('');
  const [compareIds, setCompareIds] = useState<string[]>([]);
  const [players, setPlayers] = useState<PlayerData[]>(IPL_PLAYERS);
  const [isSyncing, setIsSyncing] = useState(false);

  const filteredPlayers = players.filter(p => 
    p.name.toLowerCase().includes(search.toLowerCase()) || 
    p.role.toLowerCase().includes(search.toLowerCase())
  );

  const handleSync = async () => {
    setIsSyncing(true);
    try {
      const updated = await fetchLatestPlayerStats(players.slice(0, 15)); // Sync first 15 for speed
      const updatedMap = new Map(updated.map(p => [p.id, p]));
      setPlayers(prev => prev.map(p => updatedMap.get(p.id) || p));
    } catch (error) {
      console.error(error);
    } finally {
      setIsSyncing(false);
    }
  };

  const toggleCompare = (id: string) => {
    setCompareIds(prev => {
      if (prev.includes(id)) return prev.filter(i => i !== id);
      if (prev.length >= 2) return [prev[1], id];
      return [...prev, id];
    });
  };

  const comparedPlayers = compareIds.map(id => players.find(p => p.id === id)!);

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h2 className="text-3xl font-black tracking-tight uppercase">Player Stats</h2>
          </div>
          <p className="text-zinc-400">Analyze and compare performance of all available players in the IPL.</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-zinc-900 border border-zinc-800 px-6 py-3 rounded-2xl flex flex-col justify-center">
            <p className="text-[10px] text-zinc-500 uppercase font-black tracking-widest leading-none mb-1">Total Players</p>
            <p className="text-xl font-black text-amber-500 leading-none">{players.length}</p>
          </div>
          <button 
            onClick={handleSync}
            disabled={isSyncing}
            className="bg-zinc-900 border border-zinc-800 hover:border-amber-500/50 px-4 py-3 rounded-2xl flex items-center gap-2 text-sm font-bold transition-all disabled:opacity-50 h-full"
          >
            <RefreshCw className={cn("w-4 h-4 text-amber-500", isSyncing && "animate-spin")} />
            {isSyncing ? "Syncing..." : "Sync Latest Stats"}
          </button>
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500 group-focus-within:text-amber-500 transition-colors" />
            <input 
              type="text" 
              placeholder="Search players..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl pl-12 pr-6 py-3 w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all"
            />
          </div>
        </div>
      </div>

      {/* Comparison Tool */}
      <AnimatePresence>
        {compareIds.length > 0 && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-amber-500/10 border border-amber-500/30 rounded-3xl p-6 space-y-6"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ArrowLeftRight className="text-amber-500 w-5 h-5" />
                <h3 className="font-bold uppercase tracking-widest text-amber-500 text-sm">Player Comparison</h3>
              </div>
              <button 
                onClick={() => setCompareIds([])}
                className="text-xs font-bold uppercase text-zinc-400 hover:text-white transition-colors"
              >
                Clear All
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {comparedPlayers.map((p, i) => (
                <div key={p.id} className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">{p.role}</span>
                      <h4 className="text-2xl font-black">{p.name}</h4>
                    </div>
                    <div className={cn(
                      "px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest",
                      p.form === 'Excellent' ? "bg-green-500/20 text-green-500" : "bg-amber-500/20 text-amber-500"
                    )}>
                      {p.form} Form
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <StatItem label="Matches" value={p.stats.matches} />
                    {p.stats.runs !== undefined && <StatItem label="Runs" value={p.stats.runs} />}
                    {p.stats.wickets !== undefined && <StatItem label="Wickets" value={p.stats.wickets} />}
                    {p.stats.strikeRate !== undefined && <StatItem label="Strike Rate" value={p.stats.strikeRate} />}
                    {p.stats.economy !== undefined && <StatItem label="Economy" value={p.stats.economy} />}
                    {p.stats.average !== undefined && <StatItem label="Average" value={p.stats.average} />}
                  </div>
                </div>
              ))}
              {compareIds.length === 1 && (
                <div className="border-2 border-dashed border-zinc-800 rounded-2xl flex flex-col items-center justify-center p-12 text-zinc-600">
                  <Plus className="w-8 h-8 mb-2" />
                  <p className="font-bold uppercase tracking-widest text-xs">Select another player to compare</p>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Player Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredPlayers.map(p => (
          <motion.div 
            key={p.id}
            layout
            className={cn(
              "group bg-zinc-900 border rounded-3xl p-6 space-y-4 transition-all hover:border-amber-500/50",
              compareIds.includes(p.id) ? "border-amber-500 ring-2 ring-amber-500/20" : "border-zinc-800"
            )}
          >
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 bg-zinc-800 rounded-2xl flex items-center justify-center group-hover:bg-amber-500/10 transition-colors">
                <UserIcon className="w-6 h-6 text-zinc-500 group-hover:text-amber-500 transition-colors" />
              </div>
              <button 
                onClick={() => toggleCompare(p.id)}
                className={cn(
                  "p-2 rounded-xl border transition-all",
                  compareIds.includes(p.id) 
                    ? "bg-amber-500 border-amber-500 text-zinc-950" 
                    : "border-zinc-800 text-zinc-500 hover:text-white hover:border-zinc-700"
                )}
              >
                <ArrowLeftRight className="w-4 h-4" />
              </button>
            </div>

            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500">{p.role}</p>
              <h3 className="text-xl font-black tracking-tight">{p.name}</h3>
              <p className="text-xs text-zinc-500 font-medium">{p.nationality}</p>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="bg-zinc-950/50 p-3 rounded-xl border border-zinc-800/50">
                <p className="text-[8px] uppercase font-bold text-zinc-600">Matches</p>
                <p className="text-sm font-black">{p.stats.matches}</p>
              </div>
              <div className="bg-zinc-950/50 p-3 rounded-xl border border-zinc-800/50">
                <p className="text-[8px] uppercase font-bold text-zinc-600">Form</p>
                <p className={cn(
                  "text-sm font-black",
                  p.form === 'Excellent' ? "text-green-500" : "text-amber-500"
                )}>{p.form}</p>
              </div>
            </div>

            <div className="pt-4 flex items-center justify-between border-t border-zinc-800">
              <p className="text-[10px] font-bold text-zinc-500 uppercase">Base Price</p>
              <p className="text-lg font-black text-white">{formatCurrency(p.basePrice * 10000000)}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const StatItem = ({ label, value }: { label: string, value: any }) => (
  <div className="bg-zinc-950/50 p-4 rounded-xl border border-zinc-800">
    <p className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest">{label}</p>
    <p className="text-xl font-black text-white">{value}</p>
  </div>
);

const Navbar = ({ user, view, setView }: { user: User | null, view: 'auction' | 'stats', setView: (v: 'auction' | 'stats') => void }) => (
  <nav className="fixed top-0 left-0 right-0 h-16 bg-zinc-950 border-b border-zinc-800 flex items-center justify-between px-6 z-50">
    <div className="flex items-center gap-8">
      <div className="flex items-center gap-2">
        <Trophy className="text-blue-500 w-6 h-6" />
        <span className="text-xl font-bold tracking-tighter text-white">IPL AUCTION <span className="text-blue-500">PRO</span></span>
      </div>
      {user && (
        <div className="hidden md:flex items-center gap-1 bg-zinc-900 p-1 rounded-xl border border-zinc-800">
          <button 
            onClick={() => setView('auction')}
            className={cn(
              "px-4 py-1.5 rounded-lg text-sm font-bold transition-all flex items-center gap-2",
              view === 'auction' ? "bg-amber-500 text-zinc-950" : "text-zinc-400 hover:text-white"
            )}
          >
            <Trophy className="w-4 h-4" />
            Auction
          </button>
          <button 
            onClick={() => setView('stats')}
            className={cn(
              "px-4 py-1.5 rounded-lg text-sm font-bold transition-all flex items-center gap-2",
              view === 'stats' ? "bg-amber-500 text-zinc-950" : "text-zinc-400 hover:text-white"
            )}
          >
            <BarChart3 className="w-4 h-4" />
            Stats
          </button>
        </div>
      )}
    </div>
    <div className="flex items-center gap-4">
      {user ? (
        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-medium text-white">{user.displayName}</p>
            <p className="text-xs text-zinc-400">{user.email}</p>
          </div>
          <img src={user.photoURL || ''} alt="" className="w-8 h-8 rounded-full border border-zinc-700" referrerPolicy="no-referrer" />
          <button onClick={logout} className="p-2 hover:bg-zinc-800 rounded-full transition-colors text-zinc-400 hover:text-white">
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      ) : (
        <button onClick={signInWithGoogle} className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full font-medium hover:bg-zinc-200 transition-colors">
          <LogIn className="w-4 h-4" />
          Sign In
        </button>
      )}
    </div>
  </nav>
);

const LoginScreen = () => (
  <div className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center text-white p-6 relative overflow-hidden bg-[#05070A]">
    {/* Stadium Lights Effect */}
    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/20 blur-[120px] rotate-45 pointer-events-none" />
    <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-500/20 blur-[120px] -rotate-45 pointer-events-none" />
    
    {/* Background Glows for Login */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none" />
    
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="max-w-2xl w-full text-center space-y-12 relative z-10"
    >
      <div className="space-y-6">
        <motion.div 
          initial={{ rotate: -10, scale: 0.8 }}
          animate={{ rotate: 3, scale: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="inline-flex w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-[2.5rem] items-center justify-center shadow-2xl shadow-blue-500/40 mx-auto"
        >
          <Trophy className="w-12 h-12 text-white" />
        </motion.div>
        
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">
            IPL AUCTION <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">PRO</span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-lg mx-auto leading-relaxed">
            The ultimate real-time auction simulation. Scout players, manage budgets, and dominate the league with your friends.
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button 
          onClick={signInWithGoogle} 
          className="group relative flex items-center gap-3 bg-white text-black px-8 py-4 rounded-2xl font-bold text-lg hover:bg-zinc-200 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-white/10"
        >
          <Trophy className="w-5 h-5 text-blue-600" />
          Start Your Auction
          <div className="absolute inset-0 rounded-2xl bg-white blur-xl opacity-0 group-hover:opacity-20 transition-opacity" />
        </button>
        <button 
          onClick={signInWithGoogle} 
          className="group relative flex items-center gap-3 bg-zinc-900 border border-zinc-800 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-zinc-800 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-zinc-950/50"
        >
          <Users className="w-5 h-5 text-cyan-500" />
          Join with Code
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-12">
        {[
          { icon: Users, label: "Multiplayer", sub: "Up to 10 friends", color: "text-blue-400" },
          { icon: BarChart3, label: "Real Stats", sub: "ALL TIME", color: "text-cyan-400" },
          { icon: IndianRupee, label: "Budgeting", sub: "150CR CAPS", color: "text-blue-400" },
          { icon: Shield, label: "Private", sub: "Secure Codes", color: "text-cyan-400" }
        ].map((feat, i) => (
          <motion.div 
            key={feat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + i * 0.1 }}
            className="bg-zinc-900/50 backdrop-blur-md border border-zinc-800 p-4 rounded-2xl text-left hover:border-blue-500/50 transition-colors group"
          >
            <feat.icon className={cn("w-5 h-5 mb-2 transition-transform group-hover:scale-110", feat.color)} />
            <p className="font-bold text-sm">{feat.label}</p>
            <p className="text-[10px] text-zinc-500 uppercase tracking-wider">{feat.sub}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </div>
);

export default function App() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [room, setRoom] = useState<RoomData | null>(null);
  const [team, setTeam] = useState<TeamData | null>(null);
  const [joinCode, setJoinCode] = useState('');
  const [isCreating, setIsCreating] = useState(false);
  const [view, setView] = useState<'auction' | 'stats'>('auction');

  useEffect(() => {
    return onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoading(false);
      if (u) {
        // Sync user profile
        setDoc(doc(db, 'users', u.uid), {
          uid: u.uid,
          displayName: u.displayName,
          email: u.email,
          photoURL: u.photoURL,
          lastActive: new Date()
        }, { merge: true });
      }
    });
  }, []);

  const createRoom = async () => {
    if (!user) return;
    setIsCreating(true);
    try {
      const code = nanoid(6).toUpperCase();
      const roomId = nanoid(12);
      const newRoom: RoomData = {
        id: roomId,
        code,
        hostId: user.uid,
        name: `${user.displayName}'s Auction`,
        status: 'lobby',
        maxTeams: 10,
        baseBudget: 150, // 150 Crores
        currentBid: 0,
        createdAt: new Date()
      };

      await setDoc(doc(db, 'rooms', roomId), newRoom);
      await joinRoom(code);
    } catch (e) {
      handleFirestoreError(e, OperationType.WRITE, 'rooms');
    } finally {
      setIsCreating(false);
    }
  };

  const joinRoom = async (code: string) => {
    if (!user) return;
    try {
      const q = query(collection(db, 'rooms'), where('code', '==', code.toUpperCase()));
      const snapshot = await getDocs(q);
      if (snapshot.empty) {
        console.error('Room not found');
        return;
      }

      const roomDoc = snapshot.docs[0];
      const roomId = roomDoc.id;
      
      const teamRef = doc(db, 'rooms', roomId, 'teams', user.uid);
      const teamSnap = await getDoc(teamRef);
      
      if (!teamSnap.exists()) {
        const roomData = roomDoc.data() as RoomData;
        await setDoc(teamRef, {
          userId: user.uid,
          userName: user.displayName,
          teamName: `${user.displayName}'s XI`,
          budgetRemaining: roomData.baseBudget,
          players: []
        });
      }

      onSnapshot(doc(db, 'rooms', roomId), (doc) => {
        setRoom(doc.data() as RoomData);
      }, (err) => handleFirestoreError(err, OperationType.GET, `rooms/${roomId}`));

      onSnapshot(teamRef, (doc) => {
        setTeam(doc.data() as TeamData);
      }, (err) => handleFirestoreError(err, OperationType.GET, `rooms/${roomId}/teams/${user.uid}`));
    } catch (e) {
      handleFirestoreError(e, OperationType.GET, 'rooms');
    }
  };

  const leaveRoom = () => {
    setRoom(null);
    setTeam(null);
    setJoinCode('');
  };

  if (loading) return <div className="min-h-screen bg-zinc-950 flex items-center justify-center"><div className="w-8 h-8 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div></div>;
  if (!user) return <LoginScreen />;

  return (
    <div className="min-h-screen bg-zinc-950 text-white pt-16 relative overflow-hidden">
      {/* Polished Background Elements */}
      <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-amber-500/10 to-transparent pointer-events-none" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 -right-24 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      
      <Navbar user={user} view={view} setView={setView} />
      
      <main className="max-w-7xl mx-auto p-6 relative z-10">
        {view === 'stats' ? (
          <StatsSection />
        ) : !room ? (
          <div className="max-w-4xl mx-auto mt-12 space-y-12">
            <div className="text-center space-y-4">
              <motion.h2 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-6xl font-black tracking-tighter"
              >
                READY TO <span className="text-amber-500">AUCTION?</span>
              </motion.h2>
              <p className="text-zinc-400 text-lg">Create a private room or join your friends to start bidding.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="group bg-zinc-900/50 backdrop-blur-xl border border-zinc-800 p-8 rounded-[2.5rem] space-y-6 hover:border-amber-500/50 transition-all hover:shadow-2xl hover:shadow-amber-500/5"
            >
              <div className="w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Plus className="w-8 h-8 text-amber-500" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-black">Create Room</h3>
                <p className="text-zinc-400 text-sm">Start a new private auction. You'll be the host and can control the auction flow.</p>
              </div>
              <button 
                onClick={createRoom}
                disabled={isCreating}
                className="w-full bg-amber-500 text-zinc-950 py-4 rounded-2xl font-bold hover:bg-amber-400 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isCreating ? 'Creating...' : 'Create New Room'}
                <Play className="w-4 h-4" />
              </button>
            </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="group bg-zinc-900/50 backdrop-blur-xl border border-zinc-800 p-8 rounded-[2.5rem] space-y-6 hover:border-blue-500/50 transition-all hover:shadow-2xl hover:shadow-blue-500/5"
              >
                <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 text-blue-500" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-black">Join Room</h3>
                  <p className="text-zinc-400 text-sm">Enter a 6-digit room code shared by your friend to join an existing auction.</p>
                </div>
                <div className="space-y-3">
                  <input 
                    type="text" 
                    placeholder="ENTER CODE"
                    maxLength={6}
                    value={joinCode}
                    onChange={(e) => setJoinCode(e.target.value.toUpperCase())}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl px-6 py-4 text-center text-2xl font-black tracking-[0.5em] focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all placeholder:text-zinc-800 placeholder:tracking-normal placeholder:text-sm"
                  />
                  <button 
                    onClick={() => joinRoom(joinCode)}
                    disabled={joinCode.length !== 6}
                    className="w-full bg-blue-500 text-white py-4 rounded-2xl font-bold hover:bg-blue-400 transition-all flex items-center justify-center gap-2 disabled:opacity-20"
                  >
                    Join Auction
                    <Users className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <button 
              onClick={leaveRoom}
              className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest"
            >
              <LogOut className="w-4 h-4" />
              Leave Room
            </button>
            <AuctionRoom room={room} team={team} user={user} />
          </div>
        )}
      </main>
      <footer className="py-8 text-center border-t border-zinc-800 mt-12">
        <p className="text-zinc-500 text-sm font-medium tracking-widest uppercase">
          Built by <span className="text-white">Taki.tech</span>
        </p>
      </footer>
    </div>
  );
}

const ResultsPage = ({ room, teams, roomPlayers }: { room: RoomData, teams: TeamData[], roomPlayers: any[] }) => {
  const soldPlayers = roomPlayers.filter(p => p.status === 'sold');
  const topBuys = [...soldPlayers].sort((a, b) => (b.soldPrice || 0) - (a.soldPrice || 0)).slice(0, 5);

  useEffect(() => {
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-16 py-8 relative min-h-[80vh] flex flex-col justify-center">
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center space-y-6 relative z-10"
      >
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-block p-8 bg-gradient-to-b from-amber-400/20 to-amber-600/5 rounded-full mb-4 shadow-[0_0_80px_rgba(245,158,11,0.15)] border border-amber-500/20"
        >
          <Trophy className="w-24 h-24 text-amber-500 filter drop-shadow-[0_0_15px_rgba(245,158,11,0.5)]" />
        </motion.div>
        <h1 className="text-8xl font-black tracking-tighter uppercase italic leading-none bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent">
          Auction <span className="text-amber-500">Complete</span>
        </h1>
        <p className="text-zinc-400 text-2xl max-w-2xl mx-auto font-medium tracking-tight">
          The hammer has fallen. Results for <span className="text-white font-bold">{room.name}</span> are now legendary.
        </p>
      </motion.div>

      {/* Top Buys */}
      {topBuys.length > 0 && (
        <div className="space-y-10 relative z-10 mt-12">
          <div className="flex items-center gap-6">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
            <h3 className="text-3xl font-black uppercase tracking-[0.2em] flex items-center gap-4 px-6 text-zinc-500">
              <Shield className="w-8 h-8 text-amber-500" />
              Elite Acquisitions
            </h3>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
          </div>
          
          <div className="grid md:grid-cols-5 gap-6">
            {topBuys.map((p, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="glass-panel p-8 rounded-[2.5rem] relative overflow-hidden group hover:border-amber-500/50 transition-all shadow-2xl hover:-translate-y-2 duration-500"
              >
                <div className="absolute top-0 right-0 p-4 bg-amber-500 text-zinc-950 font-black text-sm rounded-bl-3xl shadow-lg">#{i + 1}</div>
                <p className="text-zinc-500 text-[10px] uppercase font-black mb-3 tracking-[0.2em]">{p.role}</p>
                <h4 className="text-2xl font-black leading-tight mb-8 group-hover:text-amber-500 transition-colors">{p.name}</h4>
                <div className="pt-6 border-t border-white/5">
                  <p className="text-amber-500 font-black text-3xl tabular-nums">{formatCurrency((p.soldPrice || 0) * 10000000)}</p>
                  <p className="text-[10px] text-zinc-500 uppercase font-black mt-2 truncate tracking-wider">
                    To {teams.find(t => t.userId === p.soldTo)?.teamName || 'Unknown'}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Team Squads Grid */}
      <div className="space-y-10 relative z-10 mt-20">
        <div className="flex items-center gap-6">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
          <h3 className="text-3xl font-black uppercase tracking-[0.2em] flex items-center gap-4 px-6 text-zinc-500">
            <Users className="w-8 h-8 text-blue-500" />
            Final Rosters
          </h3>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {teams.map((t, i) => {
            const teamSpent = room.baseBudget - t.budgetRemaining;
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.1 }}
                className="glass-panel rounded-[3rem] overflow-hidden flex flex-col shadow-2xl hover:shadow-amber-500/10 transition-all border-white/10 group"
              >
                <div className="bg-zinc-800/30 p-10 border-b border-white/5 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-amber-500/10 transition-all duration-700" />
                  <div className="flex justify-between items-start mb-8 relative z-10">
                    <div>
                      <h4 className="text-4xl font-black uppercase tracking-tighter leading-none mb-2 group-hover:text-amber-500 transition-colors">{t.teamName}</h4>
                      <p className="text-zinc-500 text-xs font-black uppercase tracking-[0.2em]">Owner: {t.userName}</p>
                    </div>
                    <div className="bg-amber-500 text-zinc-950 px-5 py-2 rounded-full text-xs font-black shadow-[0_0_20px_rgba(245,158,11,0.3)]">
                      {t.players.length} PLAYERS
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-6 relative z-10">
                    <div className="bg-zinc-950/40 p-5 rounded-3xl border border-white/5 backdrop-blur-sm">
                      <p className="text-[10px] text-zinc-500 uppercase font-black mb-2 tracking-widest">Total Spent</p>
                      <p className="text-2xl font-black text-white tabular-nums">{formatCurrency(teamSpent * 10000000)}</p>
                    </div>
                    <div className="bg-zinc-950/40 p-5 rounded-3xl border border-white/5 backdrop-blur-sm">
                      <p className="text-[10px] text-zinc-500 uppercase font-black mb-2 tracking-widest">Remaining</p>
                      <p className="text-2xl font-black text-amber-500 tabular-nums">{formatCurrency(t.budgetRemaining * 10000000)}</p>
                    </div>
                  </div>
                </div>
                <div className="p-10 flex-1 space-y-6 bg-zinc-900/20">
                  <p className="text-[10px] text-zinc-500 uppercase font-black tracking-[0.3em] opacity-50">Squad Manifest</p>
                  <div className="flex flex-wrap gap-3">
                    {t.players.length > 0 ? t.players.map((p, j) => (
                      <span key={j} className="bg-zinc-800/50 border border-white/5 px-4 py-2.5 rounded-2xl text-sm font-bold text-zinc-300 shadow-sm hover:bg-zinc-700 hover:text-white transition-all cursor-default">
                        {p}
                      </span>
                    )) : (
                      <p className="text-zinc-600 italic text-base font-medium py-4">No acquisitions recorded.</p>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Final Action */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="text-center py-20 relative z-10"
      >
        <button 
          onClick={() => window.location.reload()}
          className="group relative bg-white text-zinc-950 px-20 py-6 rounded-[2rem] font-black uppercase tracking-[0.3em] text-sm hover:scale-105 transition-all shadow-[0_0_60px_rgba(255,255,255,0.1)] active:scale-95 overflow-hidden"
        >
          <span className="relative z-10">Return to Lobby</span>
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
        </button>
      </motion.div>
    </div>
  );
};

const AuctionRoom = ({ room, team, user }: { room: RoomData, team: TeamData | null, user: User }) => {
  const [teams, setTeams] = useState<TeamData[]>([]);
  const [roomPlayers, setRoomPlayers] = useState<any[]>([]);
  const [showTimeAdded, setShowTimeAdded] = useState(false);
  const [confirmEnd, setConfirmEnd] = useState(false);
  const [soldNotification, setSoldNotification] = useState<{playerName: string, teamName: string} | null>(null);
  const prevExpiryRef = useRef(room.expiryTime);

  useEffect(() => {
    const currentExpiry = room.expiryTime?.toDate?.()?.getTime() || room.expiryTime;
    const prevExpiry = prevExpiryRef.current?.toDate?.()?.getTime() || prevExpiryRef.current;
    
    if (currentExpiry > prevExpiry && prevExpiry !== undefined) {
      setShowTimeAdded(true);
      const timer = setTimeout(() => setShowTimeAdded(false), 1000);
      return () => clearTimeout(timer);
    }
    prevExpiryRef.current = room.expiryTime;
  }, [room.expiryTime]);

  useEffect(() => {
    if (room.lastSoldInfo) {
      setSoldNotification({
        playerName: room.lastSoldInfo.playerName,
        teamName: room.lastSoldInfo.teamName
      });
      const timer = setTimeout(() => setSoldNotification(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [room.lastSoldInfo?.timestamp]);

  useEffect(() => {
    const unsubTeams = onSnapshot(collection(db, 'rooms', room.id, 'teams'), (snap) => {
      setTeams(snap.docs.map(d => d.data() as TeamData));
    });
    const unsubPlayers = onSnapshot(collection(db, 'rooms', room.id, 'players'), (snap) => {
      setRoomPlayers(snap.docs.map(d => d.data()));
    });
    return () => { unsubTeams(); unsubPlayers(); };
  }, [room.id]);

  const isHost = room.hostId === user.uid;

  const startAuction = async () => {
    if (!isHost) return;
    try {
      // Shuffle players for a random order
      const shuffledPlayers = [...IPL_PLAYERS].sort(() => Math.random() - 0.5);
      const playerOrder = shuffledPlayers.map(p => p.id);
      const firstPlayer = shuffledPlayers[0];
      
      if (!firstPlayer) throw new Error("No players found in database");
      
      await updateDoc(doc(db, 'rooms', room.id), {
        status: 'active',
        playerOrder: playerOrder,
        currentPlayerId: firstPlayer.id,
        currentBid: firstPlayer.basePrice,
        currentBidderId: null,
        bidStartTime: Timestamp.now(),
        expiryTime: Timestamp.fromDate(new Date(Date.now() + 15000))
      });
    } catch (error) {
      handleFirestoreError(error, OperationType.UPDATE, `rooms/${room.id}`);
    }
  };

  const placeBid = async (increment: number = 0.25) => {
    if (!team || room.status !== 'active') return;
    try {
      const nextBid = room.currentBid + increment;
      if (nextBid > team.budgetRemaining) {
        console.error('Not enough budget');
        return;
      }

      // Calculate new expiry: current expiry + 1 second
      const currentExpiry = room.expiryTime?.toDate?.()?.getTime() || room.expiryTime?.getTime?.() || room.expiryTime || Date.now();
      const newExpiry = new Date(currentExpiry + 1000);

      await updateDoc(doc(db, 'rooms', room.id), {
        currentBid: nextBid,
        currentBidderId: user.uid,
        bidStartTime: Timestamp.now(),
        expiryTime: Timestamp.fromDate(newExpiry)
      });
    } catch (error) {
      handleFirestoreError(error, OperationType.UPDATE, `rooms/${room.id}`);
    }
  };

  const sellPlayer = async () => {
    if (!isHost || !room.currentPlayerId) return;
    
    try {
      const currentPlayer = IPL_PLAYERS.find(p => p.id === room.currentPlayerId);
      if (!currentPlayer) return;

      if (room.currentBidderId) {
        // Sold
        const winnerTeamRef = doc(db, 'rooms', room.id, 'teams', room.currentBidderId);
        const winnerTeam = teams.find(t => t.userId === room.currentBidderId);
        if (winnerTeam) {
          await updateDoc(winnerTeamRef, {
            budgetRemaining: winnerTeam.budgetRemaining - room.currentBid,
            players: [...winnerTeam.players, currentPlayer.name]
          });

          // Update room with last sold info
          await updateDoc(doc(db, 'rooms', room.id), {
            lastSoldInfo: {
              playerName: currentPlayer.name,
              teamName: winnerTeam.teamName,
              price: room.currentBid,
              timestamp: Date.now()
            }
          });
        }
        
        await setDoc(doc(db, 'rooms', room.id, 'players', currentPlayer.id), {
          ...currentPlayer,
          status: 'sold',
          soldTo: room.currentBidderId,
          soldPrice: room.currentBid
        });
      } else {
        // Unsold
        await setDoc(doc(db, 'rooms', room.id, 'players', currentPlayer.id), {
          ...currentPlayer,
          status: 'unsold'
        });

        // Update room with last sold info (as UNSOLD)
        await updateDoc(doc(db, 'rooms', room.id), {
          lastSoldInfo: {
            playerName: currentPlayer.name,
            teamName: 'UNSOLD',
            price: 0,
            timestamp: Date.now()
          }
        });
      }

      // Clear current player to show transition/notification
      await updateDoc(doc(db, 'rooms', room.id), {
        currentPlayerId: null,
        expiryTime: null
      });

      // Wait 5 seconds for notification to be seen
      await new Promise(resolve => setTimeout(resolve, 5000));

      // Move to next player based on shuffled order
      const order = room.playerOrder || IPL_PLAYERS.map(p => p.id);
      const currentIndexInOrder = order.indexOf(currentPlayer.id);
      const nextPlayerId = order[currentIndexInOrder + 1];
      const nextPlayer = nextPlayerId ? IPL_PLAYERS.find(p => p.id === nextPlayerId) : null;
      
      if (nextPlayer) {
        await updateDoc(doc(db, 'rooms', room.id), {
          currentPlayerId: nextPlayer.id,
          currentBid: nextPlayer.basePrice,
          currentBidderId: null,
          bidStartTime: Timestamp.now(),
          expiryTime: Timestamp.fromDate(new Date(Date.now() + 15000))
        });
      } else {
        await updateDoc(doc(db, 'rooms', room.id), {
          status: 'finished',
          currentPlayerId: null,
          currentBid: 0,
          currentBidderId: null,
          expiryTime: null
        });
      }
    } catch (error) {
      handleFirestoreError(error, OperationType.UPDATE, `rooms/${room.id}`);
    }
  };

  const skipPlayer = async () => {
    if (!isHost || !room.currentPlayerId) return;
    
    try {
      const currentPlayer = IPL_PLAYERS.find(p => p.id === room.currentPlayerId);
      if (!currentPlayer) return;

      // Mark as skipped/unsold in the players collection
      await setDoc(doc(db, 'rooms', room.id, 'players', currentPlayer.id), {
        ...currentPlayer,
        status: 'unsold'
      });

      // Update room with last sold info (as SKIPPED)
      await updateDoc(doc(db, 'rooms', room.id), {
        lastSoldInfo: {
          playerName: currentPlayer.name,
          teamName: 'SKIPPED',
          price: 0,
          timestamp: Date.now()
        }
      });

      // Clear current player to show transition/notification
      await updateDoc(doc(db, 'rooms', room.id), {
        currentPlayerId: null,
        expiryTime: null
      });

      // Wait 2 seconds for skip notification
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Move to next player based on shuffled order
      const order = room.playerOrder || IPL_PLAYERS.map(p => p.id);
      const currentIndexInOrder = order.indexOf(currentPlayer.id);
      const nextPlayerId = order[currentIndexInOrder + 1];
      const nextPlayer = nextPlayerId ? IPL_PLAYERS.find(p => p.id === nextPlayerId) : null;
      
      if (nextPlayer) {
        await updateDoc(doc(db, 'rooms', room.id), {
          currentPlayerId: nextPlayer.id,
          currentBid: nextPlayer.basePrice,
          currentBidderId: null,
          bidStartTime: Timestamp.now(),
          expiryTime: Timestamp.fromDate(new Date(Date.now() + 15000))
        });
      } else {
        await updateDoc(doc(db, 'rooms', room.id), {
          status: 'finished',
          currentPlayerId: null,
          currentBid: 0,
          currentBidderId: null,
          expiryTime: null
        });
      }
    } catch (error) {
      handleFirestoreError(error, OperationType.UPDATE, `rooms/${room.id}`);
    }
  };

  const endAuction = async () => {
    if (!isHost) return;
    
    try {
      await updateDoc(doc(db, 'rooms', room.id), {
        status: 'finished',
        currentPlayerId: null,
        currentBid: 0,
        currentBidderId: null,
        expiryTime: null
      });
    } catch (error) {
      handleFirestoreError(error, OperationType.UPDATE, `rooms/${room.id}`);
    }
  };

  const currentPlayer = IPL_PLAYERS.find(p => p.id === room.currentPlayerId);
  const currentBidder = teams.find(t => t.userId === room.currentBidderId);

  return (
    <div className="space-y-8 relative">
      <AnimatePresence>
        {soldNotification && room.status !== 'finished' && (
          <motion.div
            initial={{ y: -100, x: '-50%', opacity: 0 }}
            animate={{ y: 0, x: '-50%', opacity: 1 }}
            exit={{ y: -100, x: '-50%', opacity: 0 }}
            className="fixed top-24 left-1/2 z-[100] bg-amber-500 text-zinc-950 px-12 py-6 rounded-3xl shadow-2xl shadow-amber-500/40 flex items-center gap-6 border-4 border-white/20 min-w-[500px] justify-center"
          >
            <Trophy className="w-10 h-10 animate-bounce" />
            <div className="text-center">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] mb-1 opacity-80">
                {soldNotification.teamName === 'UNSOLD' ? 'Auction Result' : 'Hammer Down!'}
              </p>
              <h2 className="text-3xl font-black uppercase tracking-tighter leading-none">
                {soldNotification.playerName} 
                <span className="text-zinc-950/40 mx-2">
                  {soldNotification.teamName === 'UNSOLD' ? 'REMAINS' : 
                   soldNotification.teamName === 'SKIPPED' ? 'WAS' : 'SOLD TO'}
                </span> 
                {soldNotification.teamName}
              </h2>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header Info */}
      {room.status !== 'finished' && (
        <div className="flex flex-wrap items-center justify-between gap-4 bg-zinc-900 border border-zinc-800 p-6 rounded-3xl relative overflow-hidden">
          <div className="flex items-center gap-4">
            <div className="bg-zinc-800 p-3 rounded-2xl">
              <Users className="w-6 h-6 text-zinc-400" />
            </div>
            <div>
              <h3 className="text-lg font-bold">{room.name}</h3>
              <p className="text-zinc-500 text-sm">Room Code: <span className="font-mono text-amber-500 font-bold">{room.code}</span></p>
            </div>
          </div>
          <div className="flex items-center gap-8">
            <div className="text-center">
              <p className="text-xs text-zinc-500 uppercase tracking-widest font-bold">Teams</p>
              <p className="text-xl font-black">{teams.length} / {room.maxTeams}</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-zinc-500 uppercase tracking-widest font-bold">Players Left</p>
              <p className="text-xl font-black text-amber-500">{IPL_PLAYERS.length - roomPlayers.length}</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-zinc-500 uppercase tracking-widest font-bold">Status</p>
              <p className={cn(
                "text-xl font-black uppercase",
                room.status === 'active' ? "text-green-500" : "text-amber-500"
              )}>{room.status}</p>
            </div>
          </div>
          {isHost && room.status === 'lobby' && (
            <button 
              onClick={startAuction}
              className="bg-green-500 text-zinc-950 px-8 py-3 rounded-2xl font-bold flex items-center gap-2 hover:bg-green-400 transition-colors"
            >
              <Play className="w-5 h-5" />
              Start Auction
            </button>
          )}
        </div>
      )}

      <div className={cn(
        "grid gap-8",
        room.status === 'finished' ? "grid-cols-1" : "lg:grid-cols-3"
      )}>
        {/* Main Auction Area */}
        <div className={cn(
          "space-y-8",
          room.status === 'finished' ? "col-span-1" : "lg:col-span-2"
        )}>
          {room.status === 'active' && currentPlayer ? (
            <motion.div 
              key={currentPlayer.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden"
            >
              <div className="bg-gradient-to-br from-amber-500 to-orange-600 p-8 text-zinc-950">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="bg-zinc-950/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">{currentPlayer.role}</span>
                    <h2 className="text-5xl font-black mt-2 tracking-tighter">{currentPlayer.name}</h2>
                    <p className="text-lg font-bold opacity-80">{currentPlayer.nationality}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-bold uppercase opacity-60">Base Price</p>
                    <p className="text-3xl font-black">{formatCurrency(currentPlayer.basePrice * 10000000)}</p>
                  </div>
                </div>
              </div>
              
              <div className="p-8 grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-4">Player Stats</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {Object.entries(currentPlayer.stats).map(([key, val]) => (
                        <div key={key} className="bg-zinc-800/50 p-4 rounded-2xl border border-zinc-800">
                          <p className="text-zinc-500 text-[10px] uppercase font-bold">{key}</p>
                          <p className="text-xl font-black">{val}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-4 bg-zinc-800/50 p-4 rounded-2xl border border-zinc-800">
                    <div className={cn(
                      "w-3 h-3 rounded-full animate-pulse",
                      currentPlayer.form === 'Excellent' ? "bg-green-500" : "bg-amber-500"
                    )} />
                    <div>
                      <p className="text-zinc-500 text-[10px] uppercase font-bold">Current Form</p>
                      <p className="font-bold">{currentPlayer.form}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6 flex flex-col justify-between">
                  <div className="flex justify-between items-start mb-4">
                    <div className="space-y-1 relative">
                      <p className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest">Time Remaining</p>
                      <div className="flex items-center gap-3">
                        <CountdownTimer 
                          expiryTime={room.expiryTime} 
                          onTimeUp={isHost ? sellPlayer : undefined} 
                        />
                        <AnimatePresence>
                          {showTimeAdded && (
                            <motion.span
                              initial={{ opacity: 0, y: 10, scale: 0.5 }}
                              animate={{ opacity: 1, y: -20, scale: 1.2 }}
                              exit={{ opacity: 0, scale: 0.5 }}
                              className="text-green-500 font-black text-sm absolute -right-8 top-6"
                            >
                              +1s
                            </motion.span>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                    <div className="text-right space-y-1">
                      <p className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest">Current Bid</p>
                      <p className="text-3xl font-black text-amber-500">{formatCurrency(room.currentBid * 10000000)}</p>
                    </div>
                  </div>

                  <div className="text-center py-4 border-y border-zinc-900">
                    {currentBidder ? (
                      <p className="text-sm text-zinc-400 italic">Leading: <span className="text-white font-bold not-italic">{currentBidder.userName}</span></p>
                    ) : (
                      <p className="text-sm text-zinc-500 italic">No bids yet</p>
                    )}
                  </div>
                  
                  <div className="space-y-4 mt-8">
                    <div className="grid grid-cols-2 gap-3">
                      {[0.05, 0.10, 0.20, 0.50, 1.00].map((inc) => (
                        <button
                          key={inc}
                          onClick={() => placeBid(inc)}
                          className="bg-zinc-900 border border-zinc-800 text-amber-500 py-4 rounded-2xl font-black text-sm hover:border-amber-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg"
                        >
                          BID +{inc >= 1 ? `${inc} CR` : `${inc * 100} L`}
                        </button>
                      ))}
                    </div>
                    {isHost && (
                      <div className="flex gap-3">
                        <button 
                          onClick={sellPlayer}
                          className="flex-1 bg-zinc-800 text-white py-3 rounded-2xl font-bold hover:bg-zinc-700 transition-colors"
                        >
                          {room.currentBidderId ? 'SELL PLAYER' : 'MARK AS UNSOLD'}
                        </button>
                        <button 
                          onClick={skipPlayer}
                          className="px-6 bg-red-500/10 text-red-500 border border-red-500/20 py-3 rounded-2xl font-bold hover:bg-red-500/20 transition-colors"
                        >
                          SKIP
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ) : room.status === 'finished' ? (
            <ResultsPage room={room} teams={teams} roomPlayers={roomPlayers} />
          ) : (
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-12 text-center space-y-6">
              <Users className="w-20 h-20 text-zinc-700 mx-auto" />
              <h2 className="text-3xl font-black text-zinc-500">Waiting for host to start...</h2>
              <p className="text-zinc-500">Share the code <span className="text-amber-500 font-mono font-bold">{room.code}</span> with your friends.</p>
            </div>
          )}

          {/* Sold Players History */}
          {room.status !== 'finished' && (
            <div className="space-y-4">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Play className="w-5 h-5 text-amber-500" />
                Auction History
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {roomPlayers.map((p, i) => (
                  <div key={i} className="bg-zinc-900 border border-zinc-800 p-4 rounded-2xl flex items-center justify-between">
                    <div>
                      <p className="font-bold">{p.name}</p>
                      <p className="text-xs text-zinc-500">{p.role}</p>
                    </div>
                    <div className="text-right">
                      {p.status === 'sold' ? (
                        <>
                          <p className="text-green-500 font-bold">{formatCurrency(p.soldPrice * 10000000)}</p>
                          <p className="text-[10px] text-zinc-500 uppercase font-bold">Sold to {teams.find(t => t.userId === p.soldTo)?.userName}</p>
                        </>
                      ) : (
                        <p className="text-zinc-500 font-bold uppercase text-xs">Unsold</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar: Teams & Budget */}
        {room.status !== 'finished' && (
          <div className="space-y-8">
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 space-y-6">
              <h3 className="text-lg font-bold flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-500" />
                Participants
              </h3>
              <div className="space-y-4">
                {teams.map((t, i) => (
                  <div key={i} className={cn(
                    "p-4 rounded-2xl border transition-all",
                    t.userId === user.uid ? "bg-blue-500/10 border-blue-500/50" : "bg-zinc-800/50 border-zinc-800"
                  )}>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="font-bold text-sm">{t.userName}</p>
                        <p className="text-[10px] text-zinc-500 uppercase font-bold">{t.teamName}</p>
                      </div>
                      <p className="text-amber-500 font-black text-sm">{formatCurrency(t.budgetRemaining * 10000000)}</p>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {t.players.map((p, j) => (
                        <span key={j} className="text-[9px] bg-zinc-800 px-2 py-0.5 rounded-full text-zinc-400 border border-zinc-700">{p}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {team && (
              <div className="bg-amber-500 text-zinc-950 rounded-3xl p-6 space-y-4 shadow-xl shadow-amber-500/10">
                <div className="flex items-center gap-3">
                  <div className="bg-zinc-950/10 p-2 rounded-xl">
                    <UserIcon className="w-5 h-5" />
                  </div>
                  <h3 className="font-black uppercase tracking-tight">Your Budget</h3>
                </div>
                <div>
                  <p className="text-4xl font-black">{formatCurrency(team.budgetRemaining * 10000000)}</p>
                  <p className="text-xs font-bold opacity-60 uppercase mt-1">Remaining from {formatCurrency(room.baseBudget * 10000000)}</p>
                </div>
                <div className="pt-4 border-t border-zinc-950/10">
                  <p className="text-xs font-bold uppercase opacity-60">Squad Size</p>
                  <p className="text-xl font-black">{team.players.length} Players</p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {isHost && room.status !== 'finished' && (
        <div className="flex justify-center pt-8 border-t border-zinc-800">
          {!confirmEnd ? (
            <button 
              onClick={() => setConfirmEnd(true)}
              className="group bg-red-500/10 text-red-500 border border-red-500/20 px-10 py-5 rounded-[2rem] font-black uppercase tracking-[0.2em] text-xs hover:bg-red-500/20 transition-all active:scale-[0.98] flex items-center gap-3 shadow-lg shadow-red-500/5"
            >
              <LogOut className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              End Auction Session
            </button>
          ) : (
            <div className="flex items-center gap-4 animate-in fade-in zoom-in duration-300">
              <button 
                onClick={() => setConfirmEnd(false)}
                className="bg-zinc-800 text-zinc-400 px-8 py-5 rounded-[2rem] font-black uppercase tracking-[0.2em] text-xs hover:bg-zinc-700 transition-all"
              >
                Cancel
              </button>
              <button 
                onClick={endAuction}
                className="bg-red-500 text-white px-10 py-5 rounded-[2rem] font-black uppercase tracking-[0.2em] text-xs hover:bg-red-600 transition-all shadow-xl shadow-red-500/20"
              >
                Confirm End
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
