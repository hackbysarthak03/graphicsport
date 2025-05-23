import  { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Play } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface MediaItemProps {
  id?: string;
  title?: string;
  type?: "video" | "image" | "corousel" | "reel";
  thumbnailUrl?: string;
  mediaUrl?: string;
  category?: string;
  onClick?: () => void;
}

const MediaItem = ({
  id = "media-1",
  title = "Sample Media Item",
  type = "image",
  thumbnailUrl = "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&q=80",
  mediaUrl = "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1200&q=90",
  category = "Default",
  onClick,
}: MediaItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      setIsOpen(true);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Card
          className="overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-[1.02] bg-background border-muted"
          onClick={handleClick}
        >
          <div className="relative">
            {
            type=== "video"?
              <AspectRatio ratio={16 / 9}>
              <img
                src={thumbnailUrl}
                alt={title}
                className="object-cover w-full h-full"
              />
              {type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 hover:opacity-100 transition-opacity">
                  <Play className="w-12 h-12 text-white" />
                </div>
              )}
            </AspectRatio> : 
            type === "corousel"? 
            <AspectRatio ratio={1 / 1}>
              <img
                src={thumbnailUrl}
                alt={title}
                className="object-cover w-full h-full"
              />
            </AspectRatio> : 
            type === "reel" ?
             <AspectRatio ratio={1 / 1.4142}>
              <img
                src={thumbnailUrl}
                alt={title}
                className="object-cover w-full h-full"
              />
              {type === "reel" && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 hover:opacity-100 transition-opacity">
                  <Play className="w-12 h-12 text-white" />
                </div>
              )}
            </AspectRatio> :
            <AspectRatio ratio={1 / 1.4142}>
              <img
                src={thumbnailUrl}
                alt={title}
                className="object-cover w-full h-full"
              />
            </AspectRatio>
            }
            
          </div>
          <CardContent className="p-3">
            <h3 className="font-medium text-sm truncate">{title}</h3>
            <p className="text-xs text-muted-foreground">{category}</p>
          </CardContent>
        </Card>
      </DialogTrigger>

      <DialogContent className={`${
        type === "video" 
          ? "w-[90vw] max-w-5xl h-[90vh] max-h-[800px]" 
          : "w-[90vw] max-w-4xl h-[90vh] max-h-[900px]"
      } bg-background p-6 overflow-hidden`}>
        {type === "video" || "reel" ? (
          <div className="w-full h-full flex flex-col">
            <div className="flex-1 min-h-0">
              <AspectRatio ratio={16 / 9} className="h-full">
                <iframe 
                  src={mediaUrl} 
                  className="w-full h-full rounded-md"
                  frameBorder="0" 
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" 
                  title={title}
                />
              </AspectRatio>
            </div>
            <div className="mt-4 flex-shrink-0">
              <h2 className="text-xl font-semibold">{title}</h2>
              <p className="text-muted-foreground">{category}</p>
            </div>
          </div>
        ) : <></>}
      </DialogContent>
    </Dialog>
  );
};

export default MediaItem;