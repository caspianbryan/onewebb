export const GET = async (request) => {
  const data = [
    {
      title: "Web Development",
      description: "We build responsive and high-performing websites.",
    },
    {
      title: "SEO Optimization",
      description: "Improve your search engine rankings with our SEO services.",
    },
  ];
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
