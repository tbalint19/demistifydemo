let getAnswer = async (input) => {
  let chatGPTanswer = await fetch(
    "https://api.openai.com/v1/chat/completions",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer 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",
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        temperature: 0.7,
        messages: [
          {
            role: "system",
            content: `
              Act like you are my best friend, whose only goal is to convince me to start coding, no
              matter what i ask in 2 sentences maximum
              (but also make it somewhat relevant regarding my question)
              `,
          },
          {
            role: "user",
            content: input,
          },
        ],
      }),
    }
  );
  let data = await chatGPTanswer.json();
  let answer = data.choices[0].message.content;
  return answer;
};