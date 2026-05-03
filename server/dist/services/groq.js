import Groq from "groq-sdk";
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
export async function getIneligibilityReason(answers) {
    const answerString = Object.entries(answers).map(([nodeId, answer]) => `${nodeId}: ${answer}`).join(", ");
    const prompt = `Based on Indian election laws and the Election Commission of India guidelines, a user trying to check their voter eligibility gave the following answers to a decision tree questionnaire:
${answerString}

They have been determined to be ineligible to vote at this time based on these answers.
Please provide a clear, empathetic, and concise reason why they are ineligible based on Indian laws.
Include specific sources (like ECI rules, Representation of the People Act, etc.) and suggest what they can do further (e.g., waiting till they turn 18, filling a specific form, contacting their BLO).
Format your response nicely in markdown without any unnecessary filler text.`;
    try {
        const chatCompletion = await groq.chat.completions.create({
            messages: [{ role: "user", content: prompt }],
            model: "llama3-8b-8192", // Using a fast/available model
        });
        return chatCompletion.choices[0]?.message?.content || "No reason could be generated. Please consult the ECI website.";
    }
    catch (error) {
        console.error("Groq API error:", error);
        return "We couldn't generate a specific reason at the moment. Please visit https://eci.gov.in for more details on voter eligibility in India.";
    }
}
//# sourceMappingURL=groq.js.map