import { reviews } from "@/constants";
import { Star } from "lucide-react";

const SingleReview = ({ review }: { review: (typeof reviews)[0] }) => {
  return (
    <div className="box flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-between">
          <h6 className="text-grey-700">{review.name}</h6>
          <p className="text-grey-500 text-sm">{review.designation}</p>
        </div>
        <div className="flex gap-3">
          {review.socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="text-purple hover:scale-105 transition-transform duration-300"
            >
              <link.icon strokeWidth={0} fill="currentColor" />
            </a>
          ))}
        </div>
      </div>
      <div>
        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              className={`text-purple ${
                index < review.stars ? "opacity-100" : "opacity-300"
              }`}
              size={20}
              fill="currentColor"
              key={index}
            />
          ))}
        </div>
      </div>
      <p className="text-grey-600">{review.review}</p>
    </div>
  );
};

export default SingleReview;
