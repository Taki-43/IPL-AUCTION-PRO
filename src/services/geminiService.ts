import { GoogleGenAI, Type } from "@google/genai";
import { PlayerData } from "../data/players";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });

export async function fetchLatestPlayerStats(players: PlayerData[]): Promise<PlayerData[]> {
  const prompt = `
    You are a cricket statistics expert. I have a list of IPL players. 
    Update their statistics (matches, runs, wickets, strikeRate, economy, average, fifties, hundreds, bestBowling) 
    and their current form (Excellent, Good, Average, Poor) based on the latest available data from the 2026 IPL season.
    
    Players to update: ${players.map(p => p.name).join(', ')}
    
    Return the updated data in the exact same JSON structure as the input.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              id: { type: Type.STRING },
              name: { type: Type.STRING },
              role: { type: Type.STRING },
              nationality: { type: Type.STRING },
              basePrice: { type: Type.NUMBER },
              stats: {
                type: Type.OBJECT,
                properties: {
                  matches: { type: Type.NUMBER },
                  runs: { type: Type.NUMBER },
                  wickets: { type: Type.NUMBER },
                  strikeRate: { type: Type.NUMBER },
                  economy: { type: Type.NUMBER },
                  average: { type: Type.NUMBER },
                  fifties: { type: Type.NUMBER },
                  hundreds: { type: Type.NUMBER },
                  bestBowling: { type: Type.STRING }
                }
              },
              form: { type: Type.STRING }
            },
            required: ["id", "name", "role", "nationality", "basePrice", "stats", "form"]
          }
        }
      }
    });

    const updatedPlayers = JSON.parse(response.text);
    return updatedPlayers;
  } catch (error) {
    console.error("Error fetching stats from Gemini:", error);
    return players; // Return original if fails
  }
}
