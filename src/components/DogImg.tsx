import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent } from "./ui/card";

type DogApiResponse = {
  message: string[];
  status: string;
};

const DogImg = () => {
  const [images, setImages] = useState<string[] | null>(null);

  useEffect(() => {
    const fetchDogImg = async () => {
      const res = await fetch(`https://dog.ceo/api/breeds/image/random/5`);
      const data: DogApiResponse = await res.json();
      setImages(data.message);
    };
setTimeout(() => {
  fetchDogImg();
}, Infinity);

  }, []);

  return !images || images.length == null ? (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  ) : (
    <div className="flex justify-center items-center">
      <Carousel className="w-full max-w-xs"
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      >
        <CarouselContent>
          {images &&
            images.map((imgUrl, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <img
                        src={imgUrl}
                        alt="dog"
                        className="w-full h-full object-cover rounded"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
export default DogImg;



