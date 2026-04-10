export interface PlayerData {
  id: string;
  name: string;
  role: 'Batsman' | 'Bowler' | 'All-rounder' | 'Wicketkeeper';
  nationality: 'Indian' | 'Overseas';
  basePrice: number; // in Crores
  stats: {
    matches: number;
    runs?: number;
    wickets?: number;
    strikeRate?: number;
    economy?: number;
    average?: number;
    fifties?: number;
    hundreds?: number;
    bestBowling?: string;
  };
  form: 'Excellent' | 'Good' | 'Average' | 'Poor';
  image?: string;
}

export const IPL_PLAYERS: PlayerData[] = [
  {
    id: 'virat-kohli',
    name: 'Virat Kohli',
    role: 'Batsman',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 252, runs: 8004, strikeRate: 131.97, average: 38.67, fifties: 55, hundreds: 8 },
    form: 'Excellent'
  },
  {
    id: 'rohit-sharma',
    name: 'Rohit Sharma',
    role: 'Batsman',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 257, runs: 6628, strikeRate: 131.14, average: 29.72, fifties: 43, hundreds: 2 },
    form: 'Good'
  },
  {
    id: 'ms-dhoni',
    name: 'MS Dhoni',
    role: 'Wicketkeeper',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 264, runs: 5243, strikeRate: 137.53, average: 39.13, fifties: 24, hundreds: 0 },
    form: 'Good'
  },
  {
    id: 'jasprit-bumrah',
    name: 'Jasprit Bumrah',
    role: 'Bowler',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 133, wickets: 165, economy: 7.30, average: 22.51, bestBowling: '5/10' },
    form: 'Excellent'
  },
  {
    id: 'hardik-pandya',
    name: 'Hardik Pandya',
    role: 'All-rounder',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 137, runs: 2525, wickets: 64, strikeRate: 145.28, average: 28.69, economy: 8.85 },
    form: 'Average'
  },
  {
    id: 'rashid-khan',
    name: 'Rashid Khan',
    role: 'Bowler',
    nationality: 'Overseas',
    basePrice: 0.25,
    stats: { matches: 121, wickets: 149, economy: 6.73, average: 21.82, bestBowling: '4/24' },
    form: 'Excellent'
  },
  {
    id: 'glenn-maxwell',
    name: 'Glenn Maxwell',
    role: 'All-rounder',
    nationality: 'Overseas',
    basePrice: 0.25,
    stats: { matches: 134, runs: 2771, wickets: 37, strikeRate: 156.73, average: 24.74, economy: 8.39 },
    form: 'Average'
  },
  {
    id: 'shubman-gill',
    name: 'Shubman Gill',
    role: 'Batsman',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 103, runs: 3216, strikeRate: 135.70, average: 37.84, fifties: 20, hundreds: 3 },
    form: 'Excellent'
  },
  {
    id: 'rishabh-pant',
    name: 'Rishabh Pant',
    role: 'Wicketkeeper',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 111, runs: 3284, strikeRate: 148.93, average: 35.31, fifties: 18, hundreds: 1 },
    form: 'Good'
  },
  {
    id: 'suryakumar-yadav',
    name: 'Suryakumar Yadav',
    role: 'Batsman',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 150, runs: 3594, strikeRate: 145.32, average: 32.09, fifties: 24, hundreds: 2 },
    form: 'Excellent'
  },
  {
    id: 'pat-cummins',
    name: 'Pat Cummins',
    role: 'Bowler',
    nationality: 'Overseas',
    basePrice: 0.25,
    stats: { matches: 58, wickets: 63, economy: 8.54, average: 30.16, bestBowling: '4/34' },
    form: 'Excellent'
  },
  {
    id: 'mitchell-starc',
    name: 'Mitchell Starc',
    role: 'Bowler',
    nationality: 'Overseas',
    basePrice: 0.25,
    stats: { matches: 41, wickets: 51, economy: 8.21, average: 24.12, bestBowling: '4/15' },
    form: 'Good'
  },
  {
    id: 'travis-head',
    name: 'Travis Head',
    role: 'Batsman',
    nationality: 'Overseas',
    basePrice: 0.25,
    stats: { matches: 25, runs: 772, strikeRate: 170.42, average: 33.57, fifties: 3, hundreds: 1 },
    form: 'Excellent'
  },
  {
    id: 'heinrich-klaasen',
    name: 'Heinrich Klaasen',
    role: 'Wicketkeeper',
    nationality: 'Overseas',
    basePrice: 0.25,
    stats: { matches: 35, runs: 958, strikeRate: 168.36, average: 39.92, fifties: 6, hundreds: 0 },
    form: 'Excellent'
  },
  {
    id: 'yuzvendra-chahal',
    name: 'Yuzvendra Chahal',
    role: 'Bowler',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 160, wickets: 205, economy: 7.84, average: 22.45, bestBowling: '5/40' },
    form: 'Good'
  },
  {
    id: 'ravindra-jadeja',
    name: 'Ravindra Jadeja',
    role: 'All-rounder',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 240, runs: 2959, wickets: 160, strikeRate: 129.89, average: 27.40, economy: 7.60 },
    form: 'Good'
  },
  {
    id: 'kl-rahul',
    name: 'KL Rahul',
    role: 'Wicketkeeper',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 132, runs: 4683, strikeRate: 134.61, average: 45.47, fifties: 37, hundreds: 4 },
    form: 'Average'
  },
  {
    id: 'quinton-de-kock',
    name: 'Quinton de Kock',
    role: 'Wicketkeeper',
    nationality: 'Overseas',
    basePrice: 0.25,
    stats: { matches: 107, runs: 3157, strikeRate: 134.23, average: 31.26, fifties: 23, hundreds: 2 },
    form: 'Good'
  },
  {
    id: 'andre-russell',
    name: 'Andre Russell',
    role: 'All-rounder',
    nationality: 'Overseas',
    basePrice: 0.25,
    stats: { matches: 127, runs: 2484, wickets: 115, strikeRate: 174.93, average: 29.22, economy: 9.30 },
    form: 'Good'
  },
  {
    id: 'sunil-narine',
    name: 'Sunil Narine',
    role: 'All-rounder',
    nationality: 'Overseas',
    basePrice: 0.25,
    stats: { matches: 177, runs: 1534, wickets: 180, economy: 6.73, average: 17.04, strikeRate: 165.84 },
    form: 'Excellent'
  },
  {
    id: 'ruturaj-gaikwad',
    name: 'Ruturaj Gaikwad',
    role: 'Batsman',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 66, runs: 2380, strikeRate: 139.18, average: 41.75, fifties: 18, hundreds: 2 },
    form: 'Excellent'
  },
  {
    id: 'yashasvi-jaiswal',
    name: 'Yashasvi Jaiswal',
    role: 'Batsman',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 52, runs: 1607, strikeRate: 150.61, average: 32.14, fifties: 9, hundreds: 2 },
    form: 'Excellent'
  },
  {
    id: 'rinku-singh',
    name: 'Rinku Singh',
    role: 'Batsman',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 45, runs: 893, strikeRate: 143.34, average: 30.79, fifties: 4, hundreds: 0 },
    form: 'Good'
  },
  {
    id: 'mohammed-shami',
    name: 'Mohammed Shami',
    role: 'Bowler',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 110, wickets: 127, economy: 8.44, average: 26.71, bestBowling: '4/11' },
    form: 'Good'
  },
  {
    id: 'kuldeep-yadav',
    name: 'Kuldeep Yadav',
    role: 'Bowler',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 84, wickets: 87, economy: 8.13, average: 26.36, bestBowling: '4/14' },
    form: 'Excellent'
  },
  {
    id: 'axar-patel',
    name: 'Axar Patel',
    role: 'All-rounder',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 150, runs: 1653, wickets: 123, strikeRate: 130.88, economy: 7.28, average: 30.55 },
    form: 'Excellent'
  },
  {
    id: 'nicholas-pooran',
    name: 'Nicholas Pooran',
    role: 'Wicketkeeper',
    nationality: 'Overseas',
    basePrice: 0.25,
    stats: { matches: 76, runs: 1769, strikeRate: 156.69, average: 32.16, fifties: 9, hundreds: 0 },
    form: 'Excellent'
  },
  {
    id: 'jos-buttler',
    name: 'Jos Buttler',
    role: 'Wicketkeeper',
    nationality: 'Overseas',
    basePrice: 0.25,
    stats: { matches: 107, runs: 3582, strikeRate: 147.53, average: 38.11, fifties: 19, hundreds: 7 },
    form: 'Good'
  },
  {
    id: 'david-warner',
    name: 'David Warner',
    role: 'Batsman',
    nationality: 'Overseas',
    basePrice: 0.25,
    stats: { matches: 184, runs: 6565, strikeRate: 139.77, average: 40.52, fifties: 62, hundreds: 4 },
    form: 'Average'
  },
  {
    id: 'trent-boult',
    name: 'Trent Boult',
    role: 'Bowler',
    nationality: 'Overseas',
    basePrice: 0.25,
    stats: { matches: 104, wickets: 121, economy: 8.29, average: 26.55, bestBowling: '4/18' },
    form: 'Excellent'
  },
  {
    id: 'kagiso-rabada',
    name: 'Kagiso Rabada',
    role: 'Bowler',
    nationality: 'Overseas',
    basePrice: 0.25,
    stats: { matches: 80, wickets: 117, economy: 8.42, average: 20.85, bestBowling: '4/21' },
    form: 'Good'
  },
  {
    id: 'sam-curran',
    name: 'Sam Curran',
    role: 'All-rounder',
    nationality: 'Overseas',
    basePrice: 0.25,
    stats: { matches: 59, runs: 883, wickets: 58, strikeRate: 139.06, economy: 9.45, average: 34.57 },
    form: 'Good'
  },
  {
    id: 'cameron-green',
    name: 'Cameron Green',
    role: 'All-rounder',
    nationality: 'Overseas',
    basePrice: 0.25,
    stats: { matches: 29, runs: 707, wickets: 16, strikeRate: 154.37, economy: 9.38, average: 39.28 },
    form: 'Good'
  },
  {
    id: 'liam-livingstone',
    name: 'Liam Livingstone',
    role: 'All-rounder',
    nationality: 'Overseas',
    basePrice: 0.25,
    stats: { matches: 39, runs: 939, wickets: 11, strikeRate: 162.46, average: 27.62, economy: 9.12 },
    form: 'Average'
  },
  {
    id: 'moeen-ali',
    name: 'Moeen Ali',
    role: 'All-rounder',
    nationality: 'Overseas',
    basePrice: 0.25,
    stats: { matches: 67, runs: 1162, wickets: 35, strikeRate: 143.02, average: 22.78, economy: 7.13 },
    form: 'Average'
  },
  {
    id: 'shivam-dube',
    name: 'Shivam Dube',
    role: 'All-rounder',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 65, runs: 1502, strikeRate: 145.68, average: 30.65, fifties: 9, hundreds: 0 },
    form: 'Excellent'
  },
  {
    id: 'tilak-varma',
    name: 'Tilak Varma',
    role: 'Batsman',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 38, runs: 1156, strikeRate: 146.33, average: 39.86, fifties: 6, hundreds: 0 },
    form: 'Excellent'
  },
  {
    id: 'arshdeep-singh',
    name: 'Arshdeep Singh',
    role: 'Bowler',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 65, wickets: 76, economy: 9.02, average: 27.14, bestBowling: '5/32' },
    form: 'Good'
  },
  {
    id: 'mohammed-siraj',
    name: 'Mohammed Siraj',
    role: 'Bowler',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 93, wickets: 93, economy: 8.65, average: 31.23, bestBowling: '4/21' },
    form: 'Average'
  },
  {
    id: 'sanju-samson',
    name: 'Sanju Samson',
    role: 'Wicketkeeper',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 168, runs: 4419, strikeRate: 138.96, average: 30.69, fifties: 25, hundreds: 3 },
    form: 'Excellent'
  },
  {
    id: 'shreyas-iyer',
    name: 'Shreyas Iyer',
    role: 'Batsman',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 116, runs: 3127, strikeRate: 125.79, average: 31.59, fifties: 20, hundreds: 0 },
    form: 'Good'
  },
  {
    id: 'ishan-kishan',
    name: 'Ishan Kishan',
    role: 'Wicketkeeper',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 105, runs: 2644, strikeRate: 135.87, average: 28.43, fifties: 16, hundreds: 0 },
    form: 'Good'
  },
  {
    id: 'r-ashwin',
    name: 'R Ashwin',
    role: 'All-rounder',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 212, runs: 800, wickets: 180, strikeRate: 119.05, economy: 7.12, average: 29.83 },
    form: 'Good'
  },
  {
    id: 'bhuvneshwar-kumar',
    name: 'Bhuvneshwar Kumar',
    role: 'Bowler',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 176, wickets: 181, economy: 7.56, average: 27.23, bestBowling: '5/19' },
    form: 'Good'
  },
  {
    id: 'deepak-chahar',
    name: 'Deepak Chahar',
    role: 'Bowler',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 81, wickets: 77, economy: 7.97, average: 28.68, bestBowling: '4/13' },
    form: 'Average'
  },
  {
    id: 'venkatesh-iyer',
    name: 'Venkatesh Iyer',
    role: 'All-rounder',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 50, runs: 1326, wickets: 3, strikeRate: 137.12, average: 31.57 },
    form: 'Good'
  },
  {
    id: 'nitish-rana',
    name: 'Nitish Rana',
    role: 'Batsman',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 107, runs: 2636, strikeRate: 135.25, average: 28.04, fifties: 18, hundreds: 0 },
    form: 'Average'
  },
  {
    id: 'rahul-tripathi',
    name: 'Rahul Tripathi',
    role: 'Batsman',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 95, runs: 2214, strikeRate: 138.98, average: 26.67, fifties: 11, hundreds: 0 },
    form: 'Average'
  },
  {
    id: 'devdutt-padikkal',
    name: 'Devdutt Padikkal',
    role: 'Batsman',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 64, runs: 1560, strikeRate: 122.35, average: 26.44, fifties: 9, hundreds: 1 },
    form: 'Average'
  },
  {
    id: 'prithvi-shaw',
    name: 'Prithvi Shaw',
    role: 'Batsman',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 79, runs: 1694, strikeRate: 147.43, average: 21.44, fifties: 14, hundreds: 0 },
    form: 'Poor'
  },
  {
    id: 'sai-sudharsan',
    name: 'Sai Sudharsan',
    role: 'Batsman',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 25, runs: 1034, strikeRate: 139.16, average: 47.00, fifties: 6, hundreds: 1 },
    form: 'Excellent'
  },
  {
    id: 'rahul-tewatia',
    name: 'Rahul Tewatia',
    role: 'All-rounder',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 93, runs: 1013, wickets: 32, strikeRate: 134.53, economy: 7.91, average: 25.33 },
    form: 'Good'
  },
  {
    id: 'wanindu-hasaranga',
    name: 'Wanindu Hasaranga',
    role: 'All-rounder',
    nationality: 'Overseas',
    basePrice: 0.25,
    stats: { matches: 35, wickets: 39, economy: 8.13, average: 21.33, bestBowling: '5/18' },
    form: 'Excellent'
  },
  {
    id: 'maheesh-theekshana',
    name: 'Maheesh Theekshana',
    role: 'Bowler',
    nationality: 'Overseas',
    basePrice: 0.25,
    stats: { matches: 32, wickets: 30, economy: 7.66, average: 30.53, bestBowling: '4/33' },
    form: 'Good'
  },
  {
    id: 'matheesha-pathirana',
    name: 'Matheesha Pathirana',
    role: 'Bowler',
    nationality: 'Overseas',
    basePrice: 0.25,
    stats: { matches: 20, wickets: 34, economy: 7.88, average: 17.53, bestBowling: '4/28' },
    form: 'Excellent'
  },
  {
    id: 'mustafizur-rahman',
    name: 'Mustafizur Rahman',
    role: 'Bowler',
    nationality: 'Overseas',
    basePrice: 0.25,
    stats: { matches: 57, wickets: 61, economy: 8.15, average: 28.53, bestBowling: '5/16' },
    form: 'Good'
  },
  {
    id: 'anrich-nortje',
    name: 'Anrich Nortje',
    role: 'Bowler',
    nationality: 'Overseas',
    basePrice: 0.25,
    stats: { matches: 50, wickets: 60, economy: 8.85, average: 26.53, bestBowling: '3/33' },
    form: 'Average'
  },
  {
    id: 'gerald-coetzee',
    name: 'Gerald Coetzee',
    role: 'Bowler',
    nationality: 'Overseas',
    basePrice: 0.25,
    stats: { matches: 15, wickets: 18, economy: 9.53, average: 28.53, bestBowling: '4/34' },
    form: 'Good'
  },
  {
    id: 'lockie-ferguson',
    name: 'Lockie Ferguson',
    role: 'Bowler',
    nationality: 'Overseas',
    basePrice: 0.25,
    stats: { matches: 40, wickets: 38, economy: 8.88, average: 32.53, bestBowling: '4/28' },
    form: 'Average'
  },
  {
    id: 'adam-zampa',
    name: 'Adam Zampa',
    role: 'Bowler',
    nationality: 'Overseas',
    basePrice: 0.25,
    stats: { matches: 20, wickets: 29, economy: 7.73, average: 17.62, bestBowling: '3/22' },
    form: 'Excellent'
  },
  {
    id: 'david-miller',
    name: 'David Miller',
    role: 'Batsman',
    nationality: 'Overseas',
    basePrice: 0.25,
    stats: { matches: 130, runs: 2853, strikeRate: 139.23, average: 36.53, fifties: 13, hundreds: 1 },
    form: 'Good'
  },
  {
    id: 'faf-du-plessis',
    name: 'Faf du Plessis',
    role: 'Batsman',
    nationality: 'Overseas',
    basePrice: 0.25,
    stats: { matches: 145, runs: 4571, strikeRate: 136.53, average: 36.53, fifties: 35, hundreds: 0 },
    form: 'Good'
  },
  {
    id: 'will-jacks',
    name: 'Will Jacks',
    role: 'All-rounder',
    nationality: 'Overseas',
    basePrice: 0.25,
    stats: { matches: 10, runs: 230, strikeRate: 175.53, average: 32.53, hundreds: 1 },
    form: 'Excellent'
  },
  {
    id: 'phil-salt',
    name: 'Phil Salt',
    role: 'Wicketkeeper',
    nationality: 'Overseas',
    basePrice: 0.25,
    stats: { matches: 21, runs: 654, strikeRate: 165.53, average: 38.53, fifties: 4 },
    form: 'Excellent'
  },
  {
    id: 'rachin-ravindra',
    name: 'Rachin Ravindra',
    role: 'All-rounder',
    nationality: 'Overseas',
    basePrice: 0.25,
    stats: { matches: 12, runs: 222, strikeRate: 160.53, average: 22.53, fifties: 1 },
    form: 'Good'
  },
  {
    id: 'daryl-mitchell',
    name: 'Daryl Mitchell',
    role: 'All-rounder',
    nationality: 'Overseas',
    basePrice: 0.25,
    stats: { matches: 15, runs: 318, strikeRate: 142.53, average: 28.53, fifties: 2 },
    form: 'Good'
  },
  {
    id: 'kane-williamson',
    name: 'Kane Williamson',
    role: 'Batsman',
    nationality: 'Overseas',
    basePrice: 0.25,
    stats: { matches: 79, runs: 2128, strikeRate: 125.53, average: 35.53, fifties: 18 },
    form: 'Average'
  },
  {
    id: 'shreyas-gopal',
    name: 'Shreyas Gopal',
    role: 'Bowler',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 52, wickets: 49, economy: 8.11, average: 26.53, bestBowling: '4/16' },
    form: 'Average'
  },
  {
    id: 'khaleel-ahmed',
    name: 'Khaleel Ahmed',
    role: 'Bowler',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 57, wickets: 74, economy: 8.53, average: 24.53, bestBowling: '3/21' },
    form: 'Good'
  },
  {
    id: 'mukesh-kumar',
    name: 'Mukesh Kumar',
    role: 'Bowler',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 20, wickets: 24, economy: 10.53, average: 28.53, bestBowling: '3/32' },
    form: 'Good'
  },
  {
    id: 't-natarajan',
    name: 'T Natarajan',
    role: 'Bowler',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 61, wickets: 67, economy: 8.88, average: 29.53, bestBowling: '3/10' },
    form: 'Good'
  },
  {
    id: 'abhishek-sharma',
    name: 'Abhishek Sharma',
    role: 'All-rounder',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 63, runs: 1376, strikeRate: 155.53, average: 25.53, fifties: 7 },
    form: 'Excellent'
  },
  {
    id: 'nitish-kumar-reddy',
    name: 'Nitish Kumar Reddy',
    role: 'All-rounder',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 15, runs: 303, wickets: 3, strikeRate: 142.53, average: 33.53 },
    form: 'Excellent'
  },
  {
    id: 'harshal-patel',
    name: 'Harshal Patel',
    role: 'Bowler',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 105, wickets: 125, economy: 8.53, average: 24.53, bestBowling: '5/27' },
    form: 'Good'
  },
  {
    id: 'samson-dhawan',
    name: 'Shikhar Dhawan',
    role: 'Batsman',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 222, runs: 6769, strikeRate: 127.12, average: 35.19, fifties: 51, hundreds: 2 },
    form: 'Average'
  },
  {
    id: 'ishant-sharma',
    name: 'Ishant Sharma',
    role: 'Bowler',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 105, wickets: 83, economy: 8.12, average: 35.53, bestBowling: '5/12' },
    form: 'Average'
  },
  {
    id: 'umesh-yadav',
    name: 'Umesh Yadav',
    role: 'Bowler',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 148, wickets: 144, economy: 8.43, average: 30.53, bestBowling: '4/23' },
    form: 'Average'
  },
  {
    id: 'mohit-sharma',
    name: 'Mohit Sharma',
    role: 'Bowler',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 113, wickets: 132, economy: 8.41, average: 24.53, bestBowling: '5/10' },
    form: 'Good'
  },
  {
    id: 'harshit-rana',
    name: 'Harshit Rana',
    role: 'Bowler',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 20, wickets: 25, economy: 9.12, average: 22.53, bestBowling: '3/33' },
    form: 'Excellent'
  },
  {
    id: 'vaibhav-arora',
    name: 'Vaibhav Arora',
    role: 'Bowler',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 15, wickets: 18, economy: 9.33, average: 24.53, bestBowling: '3/27' },
    form: 'Good'
  },
  {
    id: 'suyash-sharma',
    name: 'Suyash Sharma',
    role: 'Bowler',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 12, wickets: 10, economy: 8.53, average: 32.53, bestBowling: '3/30' },
    form: 'Average'
  },
  {
    id: 'ramandeep-singh',
    name: 'Ramandeep Singh',
    role: 'All-rounder',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 15, runs: 150, strikeRate: 180.53, average: 25.53 },
    form: 'Good'
  },
  {
    id: 'angkrish-raghuvanshi',
    name: 'Angkrish Raghuvanshi',
    role: 'Batsman',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 10, runs: 163, strikeRate: 155.53, average: 23.53, fifties: 1 },
    form: 'Good'
  },
  {
    id: 'nehal-wadhera',
    name: 'Nehal Wadhera',
    role: 'Batsman',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 20, runs: 350, strikeRate: 145.53, average: 28.53, fifties: 2 },
    form: 'Good'
  },
  {
    id: 'akash-madhwal',
    name: 'Akash Madhwal',
    role: 'Bowler',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 15, wickets: 19, economy: 9.88, average: 22.53, bestBowling: '5/5' },
    form: 'Average'
  },
  {
    id: 'piyush-chawla',
    name: 'Piyush Chawla',
    role: 'Bowler',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 192, wickets: 192, economy: 7.96, average: 26.53, bestBowling: '4/17' },
    form: 'Good'
  },
  {
    id: 'tim-david',
    name: 'Tim David',
    role: 'Batsman',
    nationality: 'Overseas',
    basePrice: 0.25,
    stats: { matches: 35, runs: 650, strikeRate: 170.53, average: 30.53 },
    form: 'Good'
  },
  {
    id: 'romario-shepherd',
    name: 'Romario Shepherd',
    role: 'All-rounder',
    nationality: 'Overseas',
    basePrice: 0.25,
    stats: { matches: 10, runs: 120, wickets: 5, strikeRate: 190.53, economy: 11.53 },
    form: 'Average'
  },
  {
    id: 'ayush-badoni',
    name: 'Ayush Badoni',
    role: 'All-rounder',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 40, runs: 650, strikeRate: 135.53, average: 24.53, fifties: 3 },
    form: 'Good'
  },
  {
    id: 'ravi-bishnoi',
    name: 'Ravi Bishnoi',
    role: 'Bowler',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 65, wickets: 63, economy: 7.85, average: 28.53, bestBowling: '3/24' },
    form: 'Good'
  },
  {
    id: 'naveen-ul-haq',
    name: 'Naveen-ul-Haq',
    role: 'Bowler',
    nationality: 'Overseas',
    basePrice: 0.25,
    stats: { matches: 20, wickets: 24, economy: 8.88, average: 24.53, bestBowling: '4/38' },
    form: 'Good'
  },
  {
    id: 'mayank-yadav',
    name: 'Mayank Yadav',
    role: 'Bowler',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 5, wickets: 7, economy: 6.53, average: 12.53, bestBowling: '3/14' },
    form: 'Excellent'
  },
  {
    id: 'krunal-pandya',
    name: 'Krunal Pandya',
    role: 'All-rounder',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 120, runs: 1650, wickets: 75, strikeRate: 132.53, economy: 7.35, average: 24.53 },
    form: 'Good'
  },
  {
    id: 'marcus-stoinis',
    name: 'Marcus Stoinis',
    role: 'All-rounder',
    nationality: 'Overseas',
    basePrice: 0.25,
    stats: { matches: 95, runs: 1850, wickets: 40, strikeRate: 142.53, average: 28.53, economy: 9.53 },
    form: 'Excellent'
  },
  {
    id: 'jitesh-sharma',
    name: 'Jitesh Sharma',
    role: 'Wicketkeeper',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 35, runs: 650, strikeRate: 155.53, average: 24.53, fifties: 1 },
    form: 'Average'
  },
  {
    id: 'shashank-singh',
    name: 'Shashank Singh',
    role: 'Batsman',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 25, runs: 450, strikeRate: 165.53, average: 35.53, fifties: 2 },
    form: 'Excellent'
  },
  {
    id: 'ashutosh-sharma',
    name: 'Ashutosh Sharma',
    role: 'Batsman',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 10, runs: 189, strikeRate: 185.53, average: 27.53 },
    form: 'Excellent'
  },
  {
    id: 'rahul-chahar',
    name: 'Rahul Chahar',
    role: 'Bowler',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 80, wickets: 75, economy: 7.88, average: 28.53, bestBowling: '4/27' },
    form: 'Average'
  },
  {
    id: 'mitchell-marsh',
    name: 'Mitchell Marsh',
    role: 'All-rounder',
    nationality: 'Overseas',
    basePrice: 0.25,
    stats: { matches: 40, runs: 750, wickets: 25, strikeRate: 135.53, average: 22.53, economy: 8.53 },
    form: 'Good'
  },
  {
    id: 'tristan-stubbs',
    name: 'Tristan Stubbs',
    role: 'Batsman',
    nationality: 'Overseas',
    basePrice: 0.25,
    stats: { matches: 20, runs: 450, strikeRate: 175.53, average: 45.53, fifties: 3 },
    form: 'Excellent'
  },
  {
    id: 'jake-fraser-mcgurk',
    name: 'Jake Fraser-McGurk',
    role: 'Batsman',
    nationality: 'Overseas',
    basePrice: 0.25,
    stats: { matches: 10, runs: 330, strikeRate: 230.53, average: 36.53, fifties: 3 },
    form: 'Excellent'
  },
  {
    id: 'sandeep-sharma',
    name: 'Sandeep Sharma',
    role: 'Bowler',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 120, wickets: 130, economy: 7.85, average: 26.53, bestBowling: '4/20' },
    form: 'Excellent'
  },
  {
    id: 'avesh-khan',
    name: 'Avesh Khan',
    role: 'Bowler',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 60, wickets: 70, economy: 8.88, average: 26.53, bestBowling: '4/24' },
    form: 'Good'
  },
  {
    id: 'dhruv-jurel',
    name: 'Dhruv Jurel',
    role: 'Wicketkeeper',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 25, runs: 350, strikeRate: 145.53, average: 28.53, fifties: 1 },
    form: 'Good'
  },
  {
    id: 'riyan-parag',
    name: 'Riyan Parag',
    role: 'All-rounder',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 65, runs: 1150, strikeRate: 142.53, average: 32.53, fifties: 6 },
    form: 'Excellent'
  },
  {
    id: 'shimron-hetmyer',
    name: 'Shimron Hetmyer',
    role: 'Batsman',
    nationality: 'Overseas',
    basePrice: 0.25,
    stats: { matches: 70, runs: 1350, strikeRate: 152.53, average: 30.53, fifties: 4 },
    form: 'Good'
  },
  {
    id: 'rovman-powell',
    name: 'Rovman Powell',
    role: 'Batsman',
    nationality: 'Overseas',
    basePrice: 0.25,
    stats: { matches: 30, runs: 450, strikeRate: 145.53, average: 22.53, fifties: 1 },
    form: 'Good'
  },
  {
    id: 'matheesha-pathirana-2',
    name: 'Matheesha Pathirana',
    role: 'Bowler',
    nationality: 'Overseas',
    basePrice: 0.25,
    stats: { matches: 20, wickets: 34, economy: 7.88, average: 17.53, bestBowling: '4/28' },
    form: 'Excellent'
  },
  {
    id: 'devon-conway',
    name: 'Devon Conway',
    role: 'Batsman',
    nationality: 'Overseas',
    basePrice: 0.25,
    stats: { matches: 23, runs: 924, strikeRate: 141.28, average: 48.63, fifties: 9 },
    form: 'Excellent'
  },
  {
    id: 'maheesh-theekshana-2',
    name: 'Maheesh Theekshana',
    role: 'Bowler',
    nationality: 'Overseas',
    basePrice: 0.25,
    stats: { matches: 32, wickets: 30, economy: 7.66, average: 30.53, bestBowling: '4/33' },
    form: 'Good'
  },
  {
    id: 'mustafizur-rahman-2',
    name: 'Mustafizur Rahman',
    role: 'Bowler',
    nationality: 'Overseas',
    basePrice: 0.25,
    stats: { matches: 57, wickets: 61, economy: 8.15, average: 28.53, bestBowling: '5/16' },
    form: 'Good'
  },
  {
    id: 'moeen-ali-2',
    name: 'Moeen Ali',
    role: 'All-rounder',
    nationality: 'Overseas',
    basePrice: 0.25,
    stats: { matches: 67, runs: 1162, wickets: 35, strikeRate: 143.02, average: 22.78, economy: 7.13 },
    form: 'Average'
  },
  {
    id: 'shivam-dube-2',
    name: 'Shivam Dube',
    role: 'All-rounder',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 65, runs: 1502, strikeRate: 145.68, average: 30.65, fifties: 9, hundreds: 0 },
    form: 'Excellent'
  },
  {
    id: 'tushar-deshpande',
    name: 'Tushar Deshpande',
    role: 'Bowler',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 35, wickets: 45, economy: 9.53, average: 24.53, bestBowling: '3/27' },
    form: 'Good'
  },
  {
    id: 'matheesha-pathirana-3',
    name: 'Matheesha Pathirana',
    role: 'Bowler',
    nationality: 'Overseas',
    basePrice: 0.25,
    stats: { matches: 20, wickets: 34, economy: 7.88, average: 17.53, bestBowling: '4/28' },
    form: 'Excellent'
  },
  {
    id: 'dewald-brevis',
    name: 'Dewald Brevis',
    role: 'Batsman',
    nationality: 'Overseas',
    basePrice: 0.25,
    stats: { matches: 15, runs: 350, strikeRate: 145.53, average: 25.53, fifties: 1 },
    form: 'Good'
  },
  {
    id: 'ayush-mhatre',
    name: 'Ayush Mhatre',
    role: 'Batsman',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 5, runs: 120, strikeRate: 135.53, average: 24.53 },
    form: 'Good'
  },
  {
    id: 'kartik-sharma',
    name: 'Kartik Sharma',
    role: 'Batsman',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 8, runs: 150, strikeRate: 125.53, average: 21.53 },
    form: 'Average'
  },
  {
    id: 'sarfaraz-khan',
    name: 'Sarfaraz Khan',
    role: 'Batsman',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 50, runs: 650, strikeRate: 130.53, average: 22.53, fifties: 1 },
    form: 'Good'
  },
  {
    id: 'urvil-patel',
    name: 'Urvil Patel',
    role: 'Wicketkeeper',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 5, runs: 80, strikeRate: 145.53, average: 20.53 },
    form: 'Good'
  },
  {
    id: 'jamie-overton',
    name: 'Jamie Overton',
    role: 'All-rounder',
    nationality: 'Overseas',
    basePrice: 0.25,
    stats: { matches: 10, runs: 150, wickets: 8, strikeRate: 140.53, economy: 8.53 },
    form: 'Good'
  },
  {
    id: 'ramakrishna-ghosh',
    name: 'Ramakrishna Ghosh',
    role: 'All-rounder',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 5, runs: 60, wickets: 3, strikeRate: 120.53, economy: 8.88 },
    form: 'Average'
  },
  {
    id: 'prashant-veer',
    name: 'Prashant Veer',
    role: 'All-rounder',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 5, runs: 50, wickets: 2, strikeRate: 115.53, economy: 9.12 },
    form: 'Average'
  },
  {
    id: 'matthew-short',
    name: 'Matthew William Short',
    role: 'All-rounder',
    nationality: 'Overseas',
    basePrice: 0.25,
    stats: { matches: 15, runs: 350, wickets: 5, strikeRate: 150.53, average: 25.53, economy: 8.53 },
    form: 'Good'
  },
  {
    id: 'aman-khan',
    name: 'Aman Khan',
    role: 'All-rounder',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 15, runs: 200, wickets: 2, strikeRate: 140.53, average: 18.53 },
    form: 'Average'
  },
  {
    id: 'zak-foulkes',
    name: 'Zak Foulkes',
    role: 'Bowler',
    nationality: 'Overseas',
    basePrice: 0.25,
    stats: { matches: 5, wickets: 6, economy: 8.12, average: 22.53 },
    form: 'Good'
  },
  {
    id: 'noor-ahmad',
    name: 'Noor Ahmad',
    role: 'Bowler',
    nationality: 'Overseas',
    basePrice: 0.25,
    stats: { matches: 25, wickets: 30, economy: 7.53, average: 21.53, bestBowling: '3/18' },
    form: 'Excellent'
  },
  {
    id: 'anshul-kamboj',
    name: 'Anshul Kamboj',
    role: 'Bowler',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 10, wickets: 12, economy: 8.45, average: 24.53, bestBowling: '3/25' },
    form: 'Good'
  },
  {
    id: 'mukesh-choudhary',
    name: 'Mukesh Choudhary',
    role: 'Bowler',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 15, wickets: 18, economy: 8.88, average: 26.53, bestBowling: '4/46' },
    form: 'Good'
  },
  {
    id: 'gurjapneet-singh',
    name: 'Gurjapneet Singh',
    role: 'Bowler',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 5, wickets: 4, economy: 9.12, average: 32.53 },
    form: 'Average'
  },
  {
    id: 'akeal-hosein',
    name: 'Akeal Hosein',
    role: 'Bowler',
    nationality: 'Overseas',
    basePrice: 0.25,
    stats: { matches: 15, wickets: 14, economy: 7.85, average: 28.53, bestBowling: '3/22' },
    form: 'Good'
  },
  {
    id: 'matt-henry',
    name: 'Matt Henry',
    role: 'Bowler',
    nationality: 'Overseas',
    basePrice: 0.25,
    stats: { matches: 10, wickets: 12, economy: 8.53, average: 24.53, bestBowling: '3/30' },
    form: 'Good'
  },
  {
    id: 'spencer-johnson',
    name: 'Spencer Johnson',
    role: 'Bowler',
    nationality: 'Overseas',
    basePrice: 0.25,
    stats: { matches: 15, wickets: 18, economy: 8.88, average: 26.53, bestBowling: '3/25' },
    form: 'Good'
  },
  {
    id: 'karun-nair',
    name: 'Karun Nair',
    role: 'Batsman',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 76, runs: 1496, strikeRate: 128.53, average: 23.53, fifties: 10, hundreds: 0 },
    form: 'Average'
  },
  {
    id: 'ben-duckett',
    name: 'Ben Duckett',
    role: 'Batsman',
    nationality: 'Overseas',
    basePrice: 0.25,
    stats: { matches: 0, runs: 0, strikeRate: 155.53, average: 32.53 },
    form: 'Excellent'
  },
  {
    id: 'pathum-nissanka',
    name: 'Pathum Nissanka',
    role: 'Batsman',
    nationality: 'Overseas',
    basePrice: 0.25,
    stats: { matches: 0, runs: 0, strikeRate: 138.53, average: 35.53 },
    form: 'Excellent'
  },
  {
    id: 'sahil-parakh',
    name: 'Sahil Parakh',
    role: 'Batsman',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 5, runs: 110, strikeRate: 142.53, average: 22.53 },
    form: 'Good'
  },
  {
    id: 'abishek-porel',
    name: 'Abishek Porel',
    role: 'Wicketkeeper',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 18, runs: 350, strikeRate: 148.53, average: 28.53, fifties: 1 },
    form: 'Good'
  },
  {
    id: 'sameer-rizvi',
    name: 'Sameer Rizvi',
    role: 'Batsman',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 10, runs: 150, strikeRate: 165.53, average: 25.53 },
    form: 'Good'
  },
  {
    id: 'vipraj-nigam',
    name: 'Vipraj Nigam',
    role: 'All-rounder',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 5, runs: 45, wickets: 4, strikeRate: 125.53, economy: 8.12 },
    form: 'Average'
  },
  {
    id: 'ajay-mandal',
    name: 'Ajay Mandal',
    role: 'All-rounder',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 5, runs: 60, wickets: 3, strikeRate: 118.53, economy: 7.85 },
    form: 'Average'
  },
  {
    id: 'tripurana-vijay',
    name: 'Tripurana Vijay',
    role: 'All-rounder',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 5, runs: 40, wickets: 2, strikeRate: 110.53, economy: 8.53 },
    form: 'Average'
  },
  {
    id: 'madhav-tiwari',
    name: 'Madhav Tiwari',
    role: 'Bowler',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 5, wickets: 6, economy: 8.88, average: 24.53 },
    form: 'Good'
  },
  {
    id: 'dushmantha-chameera',
    name: 'Dushmantha Chameera',
    role: 'Bowler',
    nationality: 'Overseas',
    basePrice: 0.25,
    stats: { matches: 12, wickets: 9, economy: 8.73, average: 32.53, bestBowling: '3/15' },
    form: 'Average'
  },
  {
    id: 'auqib-nabi',
    name: 'Auqib Nabi',
    role: 'Bowler',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 5, wickets: 5, economy: 8.45, average: 28.53 },
    form: 'Good'
  },
  {
    id: 'lungisani-ngidi',
    name: 'Lungi Ngidi',
    role: 'Bowler',
    nationality: 'Overseas',
    basePrice: 0.25,
    stats: { matches: 14, wickets: 25, economy: 8.29, average: 17.92, bestBowling: '4/10' },
    form: 'Good'
  },
  {
    id: 'kyle-jamieson',
    name: 'Kyle Jamieson',
    role: 'Bowler',
    nationality: 'Overseas',
    basePrice: 0.25,
    stats: { matches: 9, wickets: 9, economy: 9.60, average: 29.88, bestBowling: '3/41' },
    form: 'Average'
  },
  {
    id: 'kumar-kushagra',
    name: 'Kumar Kushagra',
    role: 'Wicketkeeper',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 5, runs: 85, strikeRate: 135.53, average: 21.53 },
    form: 'Good'
  },
  {
    id: 'anuj-rawat',
    name: 'Anuj Rawat',
    role: 'Wicketkeeper',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 25, runs: 350, strikeRate: 125.53, average: 22.53, fifties: 1 },
    form: 'Average'
  },
  {
    id: 'tom-banton',
    name: 'Tom Banton',
    role: 'Wicketkeeper',
    nationality: 'Overseas',
    basePrice: 0.25,
    stats: { matches: 2, runs: 18, strikeRate: 110.53, average: 9.00 },
    form: 'Good'
  },
  {
    id: 'glenn-phillips',
    name: 'Glenn Phillips',
    role: 'All-rounder',
    nationality: 'Overseas',
    basePrice: 0.25,
    stats: { matches: 8, runs: 65, wickets: 1, strikeRate: 125.53, average: 13.00 },
    form: 'Excellent'
  },
  {
    id: 'nishant-sindhu',
    name: 'Nishant Sindhu',
    role: 'All-rounder',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 0, runs: 0, wickets: 0 },
    form: 'Good'
  },
  {
    id: 'washington-sundar',
    name: 'Washington Sundar',
    role: 'All-rounder',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 60, runs: 378, wickets: 37, strikeRate: 117.76, economy: 7.54, average: 35.43 },
    form: 'Good'
  },
  {
    id: 'arshad-khan',
    name: 'Mohd. Arshad Khan',
    role: 'Bowler',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 10, wickets: 6, economy: 10.53, average: 38.53 },
    form: 'Average'
  },
  {
    id: 'sai-kishore',
    name: 'R Sai Kishore',
    role: 'Bowler',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 10, wickets: 13, economy: 7.53, average: 18.53, bestBowling: '4/33' },
    form: 'Good'
  },
  {
    id: 'jayant-yadav',
    name: 'Jayant Yadav',
    role: 'All-rounder',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 20, runs: 40, wickets: 8, economy: 7.12, average: 35.53 },
    form: 'Average'
  },
  {
    id: 'jason-holder',
    name: 'Jason Holder',
    role: 'All-rounder',
    nationality: 'Overseas',
    basePrice: 0.25,
    stats: { matches: 46, runs: 259, wickets: 53, strikeRate: 120.47, economy: 8.81, average: 25.43 },
    form: 'Average'
  },
  {
    id: 'shahrukh-khan',
    name: 'Shahrukh Khan',
    role: 'All-rounder',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 40, runs: 550, strikeRate: 145.53, average: 22.53 },
    form: 'Good'
  },
  {
    id: 'prasidh-krishna',
    name: 'Prasidh Krishna',
    role: 'Bowler',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 51, wickets: 49, economy: 8.92, average: 34.76, bestBowling: '4/33' },
    form: 'Good'
  },
  {
    id: 'manav-suthar',
    name: 'Manav Suthar',
    role: 'Bowler',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 0, wickets: 0 },
    form: 'Good'
  },
  {
    id: 'gurnoor-brar',
    name: 'Gurnoor Singh Brar',
    role: 'Bowler',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 1, wickets: 0, economy: 14.00 },
    form: 'Average'
  },
  {
    id: 'ashok-sharma',
    name: 'Ashok Sharma',
    role: 'Bowler',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 0, wickets: 0 },
    form: 'Average'
  },
  {
    id: 'luke-wood',
    name: 'Luke Wood',
    role: 'Bowler',
    nationality: 'Overseas',
    basePrice: 0.25,
    stats: { matches: 2, wickets: 0, economy: 13.53 },
    form: 'Good'
  },
  {
    id: 'kulwant-khejroliya',
    name: 'Kulwant Khejroliya',
    role: 'Bowler',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 5, wickets: 3, economy: 9.88, average: 35.53 },
    form: 'Average'
  },
  {
    id: 'ajinkya-rahane',
    name: 'Ajinkya Rahane',
    role: 'Batsman',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 185, runs: 4642, strikeRate: 123.53, average: 30.53, fifties: 30, hundreds: 2 },
    form: 'Average'
  },
  {
    id: 'manish-pandey',
    name: 'Manish Pandey',
    role: 'Batsman',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 170, runs: 3808, strikeRate: 120.53, average: 29.53, fifties: 22, hundreds: 1 },
    form: 'Average'
  },
  {
    id: 'finn-allen',
    name: 'Finn Allen',
    role: 'Batsman',
    nationality: 'Overseas',
    basePrice: 0.25,
    stats: { matches: 0, runs: 0, strikeRate: 165.53, average: 25.53 },
    form: 'Excellent'
  },
  {
    id: 'tejasvi-singh',
    name: 'Tejasvi Singh',
    role: 'Bowler',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 0, wickets: 0 },
    form: 'Good'
  },
  {
    id: 'tim-seifert',
    name: 'Tim Seifert',
    role: 'Wicketkeeper',
    nationality: 'Overseas',
    basePrice: 0.25,
    stats: { matches: 1, runs: 2, strikeRate: 100.00 },
    form: 'Good'
  },
  {
    id: 'anukul-roy',
    name: 'Anukul Roy',
    role: 'All-rounder',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 7, runs: 30, wickets: 5, economy: 7.53 },
    form: 'Average'
  },
  {
    id: 'sarthak-ranjan',
    name: 'Sarthak Ranjan',
    role: 'Batsman',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 0, runs: 0 },
    form: 'Average'
  },
  {
    id: 'daksh-kamra',
    name: 'Daksh Kamra',
    role: 'Bowler',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 0, wickets: 0 },
    form: 'Good'
  },
  {
    id: 'blessing-muzarabani',
    name: 'Blessing Muzarabani',
    role: 'Bowler',
    nationality: 'Overseas',
    basePrice: 0.25,
    stats: { matches: 0, wickets: 0, economy: 7.85 },
    form: 'Good'
  },
  {
    id: 'kartik-tyagi',
    name: 'Kartik Tyagi',
    role: 'Bowler',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 19, wickets: 15, economy: 9.53, average: 38.53, bestBowling: '2/29' },
    form: 'Good'
  },
  {
    id: 'prashant-solanki',
    name: 'Prashant Solanki',
    role: 'Bowler',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 2, wickets: 2, economy: 6.53 },
    form: 'Average'
  },
  {
    id: 'saurabh-dubey',
    name: 'Saurabh Dubey',
    role: 'Bowler',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 0, wickets: 0 },
    form: 'Average'
  },
  {
    id: 'navdeep-saini',
    name: 'Navdeep Saini',
    role: 'Bowler',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 32, wickets: 23, economy: 8.94, average: 42.53, bestBowling: '3/19' },
    form: 'Average'
  },
  {
    id: 'umran-malik',
    name: 'Umran Malik',
    role: 'Bowler',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 26, wickets: 29, economy: 9.33, average: 26.53, bestBowling: '5/25' },
    form: 'Good'
  },
  {
    id: 'varun-chakaravarthy',
    name: 'Varun Chakaravarthy',
    role: 'Bowler',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 70, wickets: 83, economy: 7.53, average: 24.53, bestBowling: '5/20' },
    form: 'Excellent'
  },
  {
    id: 'aiden-markram',
    name: 'Aiden Markram',
    role: 'Batsman',
    nationality: 'Overseas',
    basePrice: 0.25,
    stats: { matches: 44, runs: 996, strikeRate: 129.53, average: 31.53, fifties: 5 },
    form: 'Good'
  },
  {
    id: 'himmat-singh',
    name: 'Himmat Singh',
    role: 'Batsman',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 0, runs: 0 },
    form: 'Average'
  },
  {
    id: 'matthew-breetzke',
    name: 'Matthew Breetzke',
    role: 'Batsman',
    nationality: 'Overseas',
    basePrice: 0.25,
    stats: { matches: 0, runs: 0 },
    form: 'Good'
  },
  {
    id: 'mukul-choudhary',
    name: 'Mukul Choudhary',
    role: 'Wicketkeeper',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 0, runs: 0 },
    form: 'Average'
  },
  {
    id: 'akshat-raghuwanshi',
    name: 'Akshat Raghuwanshi',
    role: 'Batsman',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 0, runs: 0 },
    form: 'Average'
  },
  {
    id: 'josh-inglis',
    name: 'Josh Inglis',
    role: 'Wicketkeeper',
    nationality: 'Overseas',
    basePrice: 0.25,
    stats: { matches: 0, runs: 0, strikeRate: 145.53 },
    form: 'Excellent'
  },
  {
    id: 'abdul-samad',
    name: 'Abdul Samad',
    role: 'Batsman',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 50, runs: 550, strikeRate: 142.53, average: 18.53 },
    form: 'Good'
  },
  {
    id: 'shahbaz-ahamad',
    name: 'Shahbaz Ahamad',
    role: 'All-rounder',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 50, runs: 450, wickets: 17, strikeRate: 130.53, economy: 8.53 },
    form: 'Good'
  },
  {
    id: 'arshin-kulkarni',
    name: 'Arshin Kulkarni',
    role: 'All-rounder',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 1, runs: 9, strikeRate: 100.00 },
    form: 'Good'
  },
  {
    id: 'm-siddharth',
    name: 'M. Siddharth',
    role: 'Bowler',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 5, wickets: 3, economy: 7.53 },
    form: 'Good'
  },
  {
    id: 'digvesh-singh',
    name: 'Digvesh Singh',
    role: 'Bowler',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 0, wickets: 0 },
    form: 'Average'
  },
  {
    id: 'akash-singh',
    name: 'Akash Singh',
    role: 'Bowler',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 7, wickets: 5, economy: 9.88 },
    form: 'Average'
  },
  {
    id: 'prince-yadav',
    name: 'Prince Yadav',
    role: 'All-rounder',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 0, runs: 0, wickets: 0 },
    form: 'Average'
  },
  {
    id: 'arjun-tendulkar',
    name: 'Arjun Tendulkar',
    role: 'All-rounder',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 4, runs: 13, wickets: 3, economy: 9.35 },
    form: 'Average'
  },
  {
    id: 'naman-tiwari',
    name: 'Naman Tiwari',
    role: 'Bowler',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 0, wickets: 0 },
    form: 'Good'
  },
  {
    id: 'mohsin-khan',
    name: 'Mohsin Khan',
    role: 'Bowler',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 25, wickets: 27, economy: 8.45, average: 24.53, bestBowling: '4/16' },
    form: 'Good'
  },
  {
    id: 'robin-minz',
    name: 'Robin Minz',
    role: 'Wicketkeeper',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 0, runs: 0 },
    form: 'Good'
  },
  {
    id: 'sherfane-rutherford',
    name: 'Sherfane Rutherford',
    role: 'All-rounder',
    nationality: 'Overseas',
    basePrice: 0.25,
    stats: { matches: 10, runs: 106, strikeRate: 155.53, average: 15.53 },
    form: 'Good'
  },
  {
    id: 'ryan-rickelton',
    name: 'Ryan Rickelton',
    role: 'Wicketkeeper',
    nationality: 'Overseas',
    basePrice: 0.25,
    stats: { matches: 0, runs: 0, strikeRate: 145.53 },
    form: 'Excellent'
  },
  {
    id: 'danish-malewar',
    name: 'Danish Malewar',
    role: 'Batsman',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 0, runs: 0 },
    form: 'Average'
  },
  {
    id: 'naman-dhir',
    name: 'Naman Dhir',
    role: 'All-rounder',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 7, runs: 140, strikeRate: 165.53, average: 20.53 },
    form: 'Good'
  },
  {
    id: 'mitchell-santner',
    name: 'Mitchell Santner',
    role: 'All-rounder',
    nationality: 'Overseas',
    basePrice: 0.25,
    stats: { matches: 15, runs: 56, wickets: 13, economy: 7.12, average: 28.53 },
    form: 'Good'
  },
  {
    id: 'raj-angad-bawa',
    name: 'Raj Angad Bawa',
    role: 'All-rounder',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 2, runs: 11, wickets: 0 },
    form: 'Average'
  },
  {
    id: 'atharva-ankolekar',
    name: 'Atharva Ankolekar',
    role: 'All-rounder',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 0, runs: 0, wickets: 0 },
    form: 'Average'
  },
  {
    id: 'mayank-rawat',
    name: 'Mayank Rawat',
    role: 'All-rounder',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 0, runs: 0, wickets: 0 },
    form: 'Average'
  },
  {
    id: 'corbin-bosch',
    name: 'Corbin Bosch',
    role: 'All-rounder',
    nationality: 'Overseas',
    basePrice: 0.25,
    stats: { matches: 0, runs: 0, wickets: 0 },
    form: 'Average'
  },
  {
    id: 'shardul-thakur',
    name: 'Shardul Thakur',
    role: 'Bowler',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 86, wickets: 89, economy: 9.16, average: 28.76, bestBowling: '4/36' },
    form: 'Good'
  },
  {
    id: 'mayank-markande',
    name: 'Mayank Markande',
    role: 'Bowler',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 35, wickets: 32, economy: 8.53, average: 26.53, bestBowling: '4/23' },
    form: 'Good'
  },
  {
    id: 'ashwani-kumar',
    name: 'Ashwani Kumar',
    role: 'Bowler',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 0, wickets: 0 },
    form: 'Average'
  },
  {
    id: 'raghu-sharma',
    name: 'Raghu Sharma',
    role: 'Bowler',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 0, wickets: 0 },
    form: 'Average'
  },
  {
    id: 'mohammad-izhar',
    name: 'Mohammad Izhar',
    role: 'Bowler',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 0, wickets: 0 },
    form: 'Average'
  },
  {
    id: 'allah-ghazanfar',
    name: 'Allah Ghazanfar',
    role: 'Bowler',
    nationality: 'Overseas',
    basePrice: 0.25,
    stats: { matches: 2, wickets: 0, economy: 9.53 },
    form: 'Excellent'
  },
  {
    id: 'vishnu-vinod',
    name: 'Vishnu Vinod',
    role: 'Wicketkeeper',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 6, runs: 56, strikeRate: 119.15, average: 9.33 },
    form: 'Average'
  },
  {
    id: 'harnoor-pannu',
    name: 'Harnoor Pannu',
    role: 'Batsman',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 0, runs: 0 },
    form: 'Good'
  },
  {
    id: 'pyla-avinash',
    name: 'Pyla Avinash',
    role: 'Batsman',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 0, runs: 0 },
    form: 'Average'
  },
  {
    id: 'prabhsimran-singh',
    name: 'Prabhsimran Singh',
    role: 'Wicketkeeper',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 34, runs: 756, strikeRate: 145.53, average: 22.53, fifties: 1, hundreds: 1 },
    form: 'Good'
  },
  {
    id: 'harpreet-brar',
    name: 'Harpreet Brar',
    role: 'Bowler',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 42, wickets: 25, economy: 7.53, average: 32.53, bestBowling: '3/19' },
    form: 'Good'
  },
  {
    id: 'marco-jansen',
    name: 'Marco Jansen',
    role: 'All-rounder',
    nationality: 'Overseas',
    basePrice: 0.25,
    stats: { matches: 21, runs: 150, wickets: 20, strikeRate: 135.53, economy: 9.12, average: 35.53 },
    form: 'Good'
  },
  {
    id: 'azmatullah-omarzai',
    name: 'Azmatullah Omarzai',
    role: 'All-rounder',
    nationality: 'Overseas',
    basePrice: 0.25,
    stats: { matches: 10, runs: 150, wickets: 5, strikeRate: 142.53, economy: 8.88, average: 25.53 },
    form: 'Good'
  },
  {
    id: 'priyansh-arya',
    name: 'Priyansh Arya',
    role: 'Batsman',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 0, runs: 0 },
    form: 'Excellent'
  },
  {
    id: 'musheer-khan',
    name: 'Musheer Khan',
    role: 'All-rounder',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 0, runs: 0, wickets: 0 },
    form: 'Excellent'
  },
  {
    id: 'suryansh-shedge',
    name: 'Suryansh Shedge',
    role: 'All-rounder',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 0, runs: 0, wickets: 0 },
    form: 'Good'
  },
  {
    id: 'mitch-owen',
    name: 'Mitch Owen',
    role: 'All-rounder',
    nationality: 'Overseas',
    basePrice: 0.25,
    stats: { matches: 0, runs: 0, wickets: 0 },
    form: 'Average'
  },
  {
    id: 'cooper-connolly',
    name: 'Cooper Connolly',
    role: 'All-rounder',
    nationality: 'Overseas',
    basePrice: 0.25,
    stats: { matches: 0, runs: 0, wickets: 0 },
    form: 'Excellent'
  },
  {
    id: 'ben-dwarshuis',
    name: 'Ben Dwarshuis',
    role: 'Bowler',
    nationality: 'Overseas',
    basePrice: 0.25,
    stats: { matches: 1, wickets: 0, economy: 11.00 },
    form: 'Good'
  },
  {
    id: 'vyshak-vijaykumar',
    name: 'Vyshak Vijaykumar',
    role: 'Bowler',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 15, wickets: 15, economy: 9.88, average: 28.53, bestBowling: '3/23' },
    form: 'Good'
  },
  {
    id: 'yash-thakur',
    name: 'Yash Thakur',
    role: 'Bowler',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 20, wickets: 24, economy: 9.12, average: 24.53, bestBowling: '5/30' },
    form: 'Good'
  },
  {
    id: 'xavier-bartlett',
    name: 'Xavier Bartlett',
    role: 'Bowler',
    nationality: 'Overseas',
    basePrice: 0.25,
    stats: { matches: 0, wickets: 0, economy: 8.53 },
    form: 'Excellent'
  },
  {
    id: 'pravin-dubey',
    name: 'Pravin Dubey',
    role: 'Bowler',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 5, wickets: 1, economy: 8.12 },
    form: 'Average'
  },
  {
    id: 'vishal-nishad',
    name: 'Vishal Nishad',
    role: 'Bowler',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 0, wickets: 0 },
    form: 'Average'
  },
  {
    id: 'shubham-dubey',
    name: 'Shubham Dubey',
    role: 'Batsman',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 5, runs: 65, strikeRate: 135.53, average: 16.25 },
    form: 'Good'
  },
  {
    id: 'vaibhav-sooryavanshi',
    name: 'Vaibhav Sooryavanshi',
    role: 'Batsman',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 0, runs: 0 },
    form: 'Excellent'
  },
  {
    id: 'donovan-ferreira',
    name: 'Donovan Ferreira',
    role: 'All-rounder',
    nationality: 'Overseas',
    basePrice: 0.25,
    stats: { matches: 2, runs: 12, strikeRate: 150.00 },
    form: 'Good'
  },
  {
    id: 'lhuan-dre-pretorious',
    name: 'Lhuan-dre Pretorious',
    role: 'Wicketkeeper',
    nationality: 'Overseas',
    basePrice: 0.25,
    stats: { matches: 0, runs: 0 },
    form: 'Excellent'
  },
  {
    id: 'ravi-singh',
    name: 'Ravi Singh',
    role: 'Bowler',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 0, wickets: 0 },
    form: 'Average'
  },
  {
    id: 'aman-rao-perala',
    name: 'Aman Rao Perala',
    role: 'Batsman',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 0, runs: 0 },
    form: 'Average'
  },
  {
    id: 'yudhvir-singh-charak',
    name: 'Yudhvir Singh Charak',
    role: 'All-rounder',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 5, runs: 15, wickets: 3, economy: 9.12 },
    form: 'Good'
  },
  {
    id: 'dasun-shanaka',
    name: 'Dasun Shanaka',
    role: 'All-rounder',
    nationality: 'Overseas',
    basePrice: 0.25,
    stats: { matches: 3, runs: 20, wickets: 0, strikeRate: 100.00 },
    form: 'Average'
  },
  {
    id: 'jofra-archer',
    name: 'Jofra Archer',
    role: 'Bowler',
    nationality: 'Overseas',
    basePrice: 0.25,
    stats: { matches: 40, wickets: 48, economy: 7.43, average: 24.39, bestBowling: '3/19' },
    form: 'Excellent'
  },
  {
    id: 'kwena-maphaka',
    name: 'Kwena Maphaka',
    role: 'Bowler',
    nationality: 'Overseas',
    basePrice: 0.25,
    stats: { matches: 2, wickets: 1, economy: 12.53 },
    form: 'Excellent'
  },
  {
    id: 'sushant-mishra',
    name: 'Sushant Mishra',
    role: 'Bowler',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 1, wickets: 0, economy: 15.00 },
    form: 'Average'
  },
  {
    id: 'yash-raj-punja',
    name: 'Yash Raj Punja',
    role: 'Bowler',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 0, wickets: 0 },
    form: 'Average'
  },
  {
    id: 'vignesh-puthur',
    name: 'Vignesh Puthur',
    role: 'Bowler',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 0, wickets: 0 },
    form: 'Average'
  },
  {
    id: 'brijesh-sharma',
    name: 'Brijesh Sharma',
    role: 'Bowler',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 0, wickets: 0 },
    form: 'Average'
  },
  {
    id: 'adam-milne',
    name: 'Adam Milne',
    role: 'Bowler',
    nationality: 'Overseas',
    basePrice: 0.25,
    stats: { matches: 16, wickets: 18, economy: 9.62, average: 29.22, bestBowling: '3/21' },
    form: 'Good'
  },
  {
    id: 'kuldeep-sen',
    name: 'Kuldeep Sen',
    role: 'Bowler',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 11, wickets: 11, economy: 9.53, average: 32.53, bestBowling: '4/20' },
    form: 'Good'
  },
  {
    id: 'nandre-burger',
    name: 'Nandre Burger',
    role: 'Bowler',
    nationality: 'Overseas',
    basePrice: 0.25,
    stats: { matches: 6, wickets: 7, economy: 9.12, average: 28.53, bestBowling: '2/29' },
    form: 'Good'
  },
  {
    id: 'rajat-patidar',
    name: 'Rajat Patidar',
    role: 'Batsman',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 27, runs: 799, strikeRate: 158.85, average: 34.74, fifties: 7, hundreds: 1 },
    form: 'Good'
  },
  {
    id: 'jordan-cox',
    name: 'Jordan Cox',
    role: 'Wicketkeeper',
    nationality: 'Overseas',
    basePrice: 0.25,
    stats: { matches: 0, runs: 0 },
    form: 'Good'
  },
  {
    id: 'swapnil-singh',
    name: 'Swapnil Singh',
    role: 'All-rounder',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 15, runs: 80, wickets: 8, strikeRate: 135.53, economy: 8.53 },
    form: 'Good'
  },
  {
    id: 'jacob-bethell',
    name: 'Jacob Bethell',
    role: 'All-rounder',
    nationality: 'Overseas',
    basePrice: 0.25,
    stats: { matches: 0, runs: 0, wickets: 0 },
    form: 'Excellent'
  },
  {
    id: 'satvik-deswal',
    name: 'Satvik Deswal',
    role: 'Batsman',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 0, runs: 0 },
    form: 'Average'
  },
  {
    id: 'mangesh-yadav',
    name: 'Mangesh Yadav',
    role: 'All-rounder',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 0, runs: 0, wickets: 0 },
    form: 'Average'
  },
  {
    id: 'vicky-ostwal',
    name: 'Vicky Ostwal',
    role: 'Bowler',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 0, wickets: 0 },
    form: 'Good'
  },
  {
    id: 'vihaan-malhotra',
    name: 'Vihaan Malhotra',
    role: 'Batsman',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 0, runs: 0 },
    form: 'Average'
  },
  {
    id: 'kanishk-chouhan',
    name: 'Kanishk Chouhan',
    role: 'Bowler',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 0, wickets: 0 },
    form: 'Average'
  },
  {
    id: 'josh-hazlewood',
    name: 'Josh Hazlewood',
    role: 'Bowler',
    nationality: 'Overseas',
    basePrice: 0.25,
    stats: { matches: 27, wickets: 35, economy: 8.02, average: 23.14, bestBowling: '4/25' },
    form: 'Excellent'
  },
  {
    id: 'rasikh-dar',
    name: 'Rasikh Dar',
    role: 'Bowler',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 10, wickets: 9, economy: 10.53, average: 28.53, bestBowling: '3/34' },
    form: 'Good'
  },
  {
    id: 'nuwan-thushara',
    name: 'Nuwan Thushara',
    role: 'Bowler',
    nationality: 'Overseas',
    basePrice: 0.25,
    stats: { matches: 7, wickets: 8, economy: 9.88, average: 24.53, bestBowling: '3/42' },
    form: 'Good'
  },
  {
    id: 'abhinandan-singh',
    name: 'Abhinandan Singh',
    role: 'Bowler',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 0, wickets: 0 },
    form: 'Average'
  },
  {
    id: 'jacob-duffy',
    name: 'Jacob Duffy',
    role: 'Bowler',
    nationality: 'Overseas',
    basePrice: 0.25,
    stats: { matches: 0, wickets: 0 },
    form: 'Good'
  },
  {
    id: 'yash-dayal',
    name: 'Yash Dayal',
    role: 'Bowler',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 28, wickets: 28, economy: 9.88, average: 32.53, bestBowling: '3/20' },
    form: 'Good'
  },
  {
    id: 'aniket-verma',
    name: 'Aniket Verma',
    role: 'Batsman',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 0, runs: 0 },
    form: 'Average'
  },
  {
    id: 'smaran-ravichandran',
    name: 'Smaran Ravichandran',
    role: 'Batsman',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 0, runs: 0 },
    form: 'Good'
  },
  {
    id: 'salil-arora',
    name: 'Salil Arora',
    role: 'Wicketkeeper',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 0, runs: 0 },
    form: 'Average'
  },
  {
    id: 'kamindu-mendis',
    name: 'Kamindu Mendis',
    role: 'All-rounder',
    nationality: 'Overseas',
    basePrice: 0.25,
    stats: { matches: 0, runs: 0, wickets: 0 },
    form: 'Excellent'
  },
  {
    id: 'harsh-dubey',
    name: 'Harsh Dubey',
    role: 'All-rounder',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 0, runs: 0, wickets: 0 },
    form: 'Good'
  },
  {
    id: 'brydon-carse',
    name: 'Brydon Carse',
    role: 'Bowler',
    nationality: 'Overseas',
    basePrice: 0.25,
    stats: { matches: 0, wickets: 0 },
    form: 'Good'
  },
  {
    id: 'shivang-kumar',
    name: 'Shivang Kumar',
    role: 'Batsman',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 0, runs: 0 },
    form: 'Average'
  },
  {
    id: 'krains-fuletra',
    name: 'Krains Fuletra',
    role: 'All-rounder',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 0, runs: 0, wickets: 0 },
    form: 'Average'
  },
  {
    id: 'david-payne',
    name: 'David Payne',
    role: 'Bowler',
    nationality: 'Overseas',
    basePrice: 0.25,
    stats: { matches: 0, wickets: 0 },
    form: 'Good'
  },
  {
    id: 'zeeshan-ansari',
    name: 'Zeeshan Ansari',
    role: 'Bowler',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 0, wickets: 0 },
    form: 'Good'
  },
  {
    id: 'jaydev-unadkat',
    name: 'Jaydev Unadkat',
    role: 'Bowler',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 98, wickets: 97, economy: 8.85, average: 31.53, bestBowling: '5/25' },
    form: 'Average'
  },
  {
    id: 'eshan-malinga',
    name: 'Eshan Malinga',
    role: 'Bowler',
    nationality: 'Overseas',
    basePrice: 0.25,
    stats: { matches: 0, wickets: 0 },
    form: 'Good'
  },
  {
    id: 'sakib-hussain',
    name: 'Sakib Hussain',
    role: 'Bowler',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 0, wickets: 0 },
    form: 'Average'
  },
  {
    id: 'onkar-tarmale',
    name: 'Onkar Tarmale',
    role: 'Bowler',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 0, wickets: 0 },
    form: 'Average'
  },
  {
    id: 'amit-kumar',
    name: 'Amit Kumar',
    role: 'All-rounder',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 0, runs: 0, wickets: 0 },
    form: 'Average'
  },
  {
    id: 'praful-hinge',
    name: 'Praful Hinge',
    role: 'Bowler',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 0, wickets: 0 },
    form: 'Average'
  },
  {
    id: 'shivam-mavi',
    name: 'Shivam Mavi',
    role: 'Bowler',
    nationality: 'Indian',
    basePrice: 0.25,
    stats: { matches: 32, wickets: 30, economy: 8.71, average: 31.40, bestBowling: '4/21' },
    form: 'Good'
  }
];
