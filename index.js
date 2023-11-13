import OpenAI from "openai";

const openai = new OpenAI();

async function main() {
  const image = await openai.images.generate({
    prompt: "A cute baby sea otter",
    n: 2,
    size: "1024x1024",
  });

  console.log(image.data);
}
main();
