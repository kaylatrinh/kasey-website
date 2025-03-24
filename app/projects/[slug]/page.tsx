import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import NavHeader from "@/app/header/page";

const projects = {
  "sailor-moon-shirt": {
    title: "Sailor Moon Shirt",
    description: "The Sailor Moon Series, 2024",
    images: [
      "/sailor-moon-muslin-1.jpg",
      "/sailor-moon-muslin-2.jpg",
      "/sailor-moon-shirt-1.jpg",
      "/sailor-moon-shirt-2.jpg",
      "/sailor-moon-shirt-3.jpg",
    ],
    details: [
      "The following installations dug deeply into the iconic, magical realm of Sailor Moon. Following a teenage girl named Usagi Tsukino, who finds out she's a celestial warrior, set to save the world from all evil. This project is a blend of a constructed wearable art and a sculptural 3-D element. \n\n",
      "At the heart of the collection is an inspired fashion-designed shirt and a replicated wand, similar to the ones seen in the television series. Using fabric manipulations, pattern drafting, and sewing techniques for the construction of the dressed shirt. As well as playing with 3-D and 2-D platforms such as Autodesk Maya for the construction of the base and Adobe Illustrator for the laser printed gems, in the currations of the wand. Each piece is a letter to femininity, strength, and enchantment, inviting wearers to step into their own power, similar to a magical girl ready to transform under the moonlight.\n",
  ]
  },
  "sailor-moon-wand": {
    title: "Sailor Moon Wand",
    description: "The Sailor Moon Series, 2024",
    images: [
      "/wand-prod-1.png",
      "/wand-prod-2.png",
      "/wand-1.jpg",
      "/wand-2.jpg",
    ],
    details:[
      "The following installations dug deeply into the iconic, magical realm of Sailor Moon. Following a teenage girl named Usagi Tsukino, who finds out she's a celestial warrior, set to save the world from all evil. This project is a blend of a constructed wearable art and a sculptural 3-D element. \n\n",
      "At the heart of the collection is an inspired fashion-designed shirt and a replicated wand, similar to the ones seen in the television series. Using fabric manipulations, pattern drafting, and sewing techniques for the construction of the dressed shirt. As well as playing with 3-D and 2-D platforms such as Autodesk Maya for the construction of the base and Adobe Illustrator for the laser printed gems, in the currations of the wand. Each piece is a letter to femininity, strength, and enchantment, inviting wearers to step into their own power, similar to a magical girl ready to transform under the moonlight.\n",
    ]
  },
  "plus-size-body": {
    title: "Drawing on a Plus Size Body",
    description: "Fashion Sketches and Flats, 2024",
    images: [
      "/plus-size-1.png",
      "/plus-size-2.png",
      "/plus-size-3.png",
      "/plus-size-4.png",
      "/plus-size-5.png",
      "/plus-size-6.png",

    ],
    details:
    "This project will use a range of methods, including expressive line work, contouring, shading, and gesture drawing, to depict the movement of various plus-sized figures. The intention is to appreciate each body's unique proportions, curves, and postures in different sorts of garments. While also curating hand drawn flats to better understand the true shapes of each piece. ",
  },
  "man-best-friend": {
    title: "A Man's Best Friend",
    description: "Fashion Sketches and Flats, 2024",
    images: [
      "/dog-fashion-1.png",
      "/dog-fashion-2.png",
      "/dog-fashion-3.png",
      "/dog-fashion-4.png",
      "/dog-fashion-5.png",
      "/dog-fashion-6.png",
      "/dog-fashion-7.png",
      "/dog-fashion-8.png",
    ],
    details:
      "With this collection, I chose to explore the idea of posthumanism through the relationship between dogs and humans. Owning a dog myself, I understand the deep bond that humans and their pets have intertwined. In many cases, dogs aren't seen as just an individual's pet, but a part of their family. In an article written by Annamari Vanska \" Cause I Wuv You! Pet dog Fashion and Emotional Consumption,\" the writer speaks on the ways in which pet consumerism reflects and influences the intricate emotional relationship between humans and their dogs. It investigates the ways in fashion serves to express and commercialize relationships, uncovering more profound social and psychological aspects of companionship. For my final collection, I chose certain materiality and crafts to represent the warm and comforting feeling one gets when around their dog. Showing the ways in which fashion can relate to emotional values.",
  },
  "open-heart": {
    title: "Open Heart",
    description: "Sewing Series, 2024",
    images: [
      "/open-heart-muslin-1.jpg",
      "/open-heart-muslin-2.jpg",
      "/open-heart-muslin-3.jpg",
      "/open-heart-1.jpg",
      "/open-heart-2.jpg",
      "/open-heart-3.jpg",
      "/open-heart-4.jpg",
    ],
    details: [
      "With this next garment, I wanted to push the boundaries of my craftsmanship and technical skills. One of the most exciting aspects of this piece was experimenting with playful shapes within the dress’s silhouette, which ultimately led to the successful creation of the heart shape.",
        "The most striking feature of this design is undoubtedly the intricate beadwork outlining these shapes. While visually captivating, it also proved to be the most challenging element. The beading alone required 15 hours of meticulous work, in addition to the garment’s construction. Despite the complexity, this detail elevates the piece, adding depth, texture, and a sense of artistry that makes the final design truly special."
    ]
  },
  "romantic-dream": {
    title: "A Romantic Dream",
    description: "Sewing Series, 2024",
    images: [
      "/romantic-dream-muslin-1.jpg",
      "/romantic-dream-muslin-2.jpg",
      "/romantic-dream-muslin-3.jpg",
      "/romantic-dream-1.jpg",
      "/romantic-dream-2.jpg",
      "/romantic-dream-3.jpg",
    ],
    details:
      "My father used to read me fairytale stories every night before bed when I was a child. I was enthralled by the princesses' ethereal silhouettes and fell in love with the grace and elegance of their gowns. I was inspired to create a skirt with a striking bow at the back and soft pleats, which perfectly captured the charming feel I've always adorned from my childhood. \n",
  },
  "lifescape-book": {
    title: "Lifescape Book",
    description: "Fine Arts, 2024",
    images: [
      "/lifescape-1.jpg",
      "/lifescape-2.jpg",
    ],
    details:
        "Curated in my first year drawing and imaging course, we were asked to create a lifescape book of a certain personal experience in our life so far. My idea stemmed from my journey moving across the country from California to New York. I made the decision to combine the Brooklyn Bridge and the Golden Gate, two of the most iconic sites that symbolize each city. While also taking into account the differences between my current city life and the suburban area I grew up in. I wanted this piece to reflect how deeply my culture has shaped my identity. To honor that, I chose to incorporate glimpses of different aspects of my life, weaving them together as a tribute to my roots and experiences.",
  },
  "cruelty-fast-fashion": {
    title: "The Cruelty of Fast Fashion",
    description: "Fine Arts, 2024",
    images: [
      "/fast-fashion-1.jpg",
      "/fast-fashion-2.jpg",
    ],
    details:
        "This shadow box is representational of the harm fast fashion has caused on our planet. To keep up with society's latest trends, companies such as Shien or Fashion Nova have made it their mission to create a new line of clothing every other week. And with the use of cheap labor and fabric these businesses have been able to keep up with the demand, while also charging close to nothing for their products. Companies would place steep discounts on their products to encourage consumerism and mass buying. People could purchase multiple items of these companies for the same cost of one sustainable brand. Furthermore, cheap products, made from cheap materials, can only be worn for a limited amount of time before being destroyed by daily life and activities. They then end up in one of the many landfills that pollute our environment and the Earth. The decomposition of fast fashion products in landfills increases the number of methane gasses in our atmosphere. This leads to drastic changes in climate control. These landfills become Pollution Closets. Kasey’s Kloset is a depiction of the effects of fast fashion and its negative effects on society. The garments are made of used scraps of felt. The trash bins located on the inside of the closet were obtained from past project supplies that had been taken apart. And with that, I hope this piece brings attention to the effects of mass consumerism of fast fashion as well as bring to light the importance of sustainability as a means to protect the environment.",
  },
  "layers-of-meaning": {
    title: "Layers of Meaning",
    description: "Fine Arts, 2024",
    images: [
      "/layers-meaning-1.jpg",
      "/layers-meaning-2.jpg",
    ],
    details:
        "For this research, I choose to analyze the Vietnamese artist Min's song Cà Phê. This upbeat song tells the story of a woman who waits for someone who never arrives. I choose to make an artwork that symbolizes this division because the tune speaks to around three different emotional periods. Her happiness after a first kiss is the first phase; she next experiences longing and confusion over why the man hasn't texted her back; and last, she experiences heartbreak when he never returns. Using Adobe Illustrator and a high precision, laser cutting machine, I began designing the elements to my piece. For the concept, a lot of it was geared towards a visual aspect. I wanted people to recognize all the layers and etchings that this design has to it, making individuals wonder; how does it make them feel? Do they experience a sense of anxiety, joy, or sorrow?\n",
  },
}
export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects[params.slug as keyof typeof projects];

  if (!project) {
    return <div>Project not found</div>;
  }

  // const mainImage = project.images[0] || "/placeholder.svg";
  const otherImages = project.images; // All images after the first one

  return (
      <div className="flex flex-col min-h-screen">
        <NavHeader />
        <main className="flex-1">
          <section className="w-full py-12 md:py-24">
            <div className="px-4 md:px-6">
              <Button variant="ghost" size="sm" asChild className="mb-8">
                <Link href="/projects">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to all projects
                </Link>
              </Button>
              <div className="w-full grid gap-6 lg:grid-cols-2 lg:gap-12">
                <div className="space-y-4">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    {project.title}
                  </h1>
                  <p className="text-muted-foreground">{project.description}</p>
                  <div className="space-y-4">
                    {Array.isArray(project.details) ? (
                        project.details.map((detail, index) => <p key={index}>{detail}</p>)
                    ) : (
                        <p>{project.details}</p>
                    )}
                  </div>
                </div>
                <div className="w-full">
                  {otherImages.length > 0 && (
                      <div className="grid grid-cols-2 gap-4">
                        {otherImages.map((imgSrc, index) => (
                            <div key={index} className="overflow-hidden">
                              <Image
                                  src={imgSrc}
                                  alt={`${project.title} - Detail ${index + 1}`}
                                  width={400}
                                  height={600}
                                  className="object-contain w-full h-auto rounded-lg"
                              />
                            </div>
                        ))}
                      </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
          <p className="text-xs text-muted-foreground">© 2025 Portfolio. All rights reserved.</p>
        </footer>
      </div>
  );
}