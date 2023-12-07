import Link from "next/link";

export default function AllBlogs({ params }) {
  const selectBlog = blogsData.find((item) => item.slug === params.slug);
  return (
    <div>
        <Link href="/blog">Back to Blog</Link><br/><br/>
      <h3>{selectBlog?.content}</h3>
    </div>
  );
}



const blogsData = [
  {
    id: 1,
    slug: 'Computer-Sciences',
    content: "Computer science stands as the cornerstone of our technological evolution, a field that transcends boundaries and shapes our modern world. It delves into the science behind computation, algorithms, and the very essence of how information is processed, stored, and utilized. At its core, computer science isn't merely about coding or machines; it's a mindset, a systematic approach to problem-solving that encapsulates innovation and logic. From the foundational theories of algorithms and data structures to the intricate realms of artificial intelligence and quantum computing, it's a discipline as diverse as the technologies it engenders. In this digital age, computer science weaves its threads through every facet of our lives. It powers the devices we use, fuels breakthroughs in healthcare, drives financial systems, and fosters communication on a global scale. It's the bedrock of cybersecurity, safeguarding our data in an increasingly interconnected world. Yet, amidst its technical prowess, computer science embodies creativity and ingenuity. It fosters a community of thinkers, innovators, and problem-solvers who push the boundaries of what's possible. In essence, computer science isn't just a subject; it's an expedition into the boundless frontiers of human potential, shaping our present and charting the course for an awe-inspiring technological future."
  },
  {
    id: 2,
    slug: 'Mathematics',
    content: "Mathematics, the universal language of patterns and structures, is an extraordinary tapestry woven into the fabric of our existence. It’s not just about numbers; it’s a sublime art form, a gateway to understanding the fundamental laws governing the universe. From ancient civilizations to cutting-edge scientific discoveries, mathematics has been the guiding light, allowing us to comprehend the mysteries of nature and unlock the secrets of the cosmos. It transcends cultures, offering a precise and unambiguous means of expressing complex ideas. At its heart, mathematics is both a science and an art—a realm where logic meets creativity. It births intricate equations that describe the motion of celestial bodies, the patterns of nature, and the algorithms that power our modern technology. Yet, beyond its practical applications, mathematics fosters critical thinking, problem-solving, and a profound appreciation for precision and reasoning. It nurtures resilience in the face of challenges, encouraging us to embrace complexities and seek elegant solutions. Mathematics isn't confined to classrooms and textbooks; it’s an enchanting journey through the realms of abstraction and beauty, a testament to the human intellect's boundless capacity for discovery and understanding. It’s the language through which the universe whispers its deepest secrets, inviting us to explore its infinite wonders."
  },
  {
    id: 3,
    slug: 'Physics',
    content: "Physics, the bedrock of natural sciences, unveils the profound mysteries of the universe, from the smallest subatomic particles to the vastness of cosmic realms. It's the pursuit of understanding the fundamental principles that govern the very fabric of existence. At its essence, physics embodies curiosity—the relentless quest to unravel the unknown. It's the science of patterns, forces, energy, and matter, offering insights into the workings of nature through observation, experimentation, and mathematical reasoning. From Isaac Newton's laws that govern motion to Albert Einstein's theory of relativity, physics has continuously evolved, reshaping our understanding of space, time, and the intricate dance of particles. It's the foundation upon which technological marvels are built, from the microprocessors in our devices to the exploratory missions in outer space. But beyond its technological implications, physics ignites a sense of wonder and awe. It challenges our perceptions, provokes thought, and sparks innovation. It fosters a mindset of inquiry and perseverance, urging us to question the unknown and seek deeper truths about the cosmos. In essence, physics isn't just a scientific discipline; it's a journey of discovery, a pursuit of understanding the universe's elegance and complexity, inviting us to peer into the mysteries that lie at the heart of existence."
  },
  {
    id: 4,
    slug: 'Biology',
    content: "Biology, the study of life in its myriad forms, serves as a lens through which we comprehend the remarkable diversity and interconnectedness of living organisms. It's a tapestry woven with the threads of evolution, adaptation, and the delicate balance that sustains life on our planet. At its core, biology unveils the wonders of the natural world—from the microscopic intricacies of cells to the breathtaking complexity of ecosystems. It explores the mechanisms of inheritance, the diversity of species, and the intricate web of interactions that define life itself. From Charles Darwin's theory of evolution to the groundbreaking discoveries in genetics and molecular biology, the field continues to evolve, uncovering the secrets of life and driving innovations in medicine, agriculture, and conservation. Yet, beyond its scientific significance, biology fosters a deep sense of connection—to our environment, to the intricate systems that support life, and to the ethical considerations of our impact on the natural world. It encourages stewardship and understanding, reminding us of the delicate balance between humanity and the ecosystems we inhabit. In essence, biology isn't just a scientific pursuit; it's a celebration of life's diversity, a testament to the resilience and adaptability of living organisms, and a call to explore and preserve the wonders of our living planet."
  }
];