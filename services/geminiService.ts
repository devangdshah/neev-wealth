import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || '';

let ai: GoogleGenAI | null = null;

try {
  if (API_KEY) {
    ai = new GoogleGenAI({ apiKey: API_KEY });
  }
} catch (error) {
  console.error("Failed to initialize Gemini Client", error);
}

export const askFinancialAdvisor = async (question: string): Promise<string> => {
  if (!ai) {
    return "I am currently unable to connect to the AI service. Please try again later.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: question,
      config: {
        systemInstruction: "You are an intelligent assistant for 'Neev Wealth', a fee-only financial advisory firm in India. You specialize in Indian financial markets, mutual funds, and helping NRIs returning to India. Answer questions briefly, professionally, and accurately. Do not give specific investment advice (like 'buy stock X'), but rather explain concepts, tax rules (like FEMA), or general strategies. Keep answers under 100 words unless asked for detail.",
        thinkingConfig: { thinkingBudget: 0 } // Disable thinking for faster chat response
      },
    });
    return response.text || "I couldn't generate a response at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I encountered an error processing your request.";
  }
};