export async function POST(req) {
  try {
    const { answers, additionalNotes } = await req.json();
    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
      return new Response(JSON.stringify({ error: "API Key is missing" }), {
        status: 500,
      });
    }

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini-2024-07-18",
        messages: [
          {
            role: "system",
            content:
              "You are an expert business consultant specializing in side hustles. Analyze the user's responses and recommend the best side hustle but make it sort of creative. Format your answer as a visually appealing markdown card with a bold header, bullet points for key benefits, and a clear, concise summary. Use markdown formatting (e.g., **bold** for headings, *italics* for emphasis) to create a modern and engaging look. Use Horizontal diving lines and dont use triple backticks at the start and end",
          },
          ...answers.map((answer) => ({
            role: "user",
            content: answer,
          })),
          {
            role: "user",
            content: additionalNotes,
          },
        ],
      }),
    });

    const data = await response.json();
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}
