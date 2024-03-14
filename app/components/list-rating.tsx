import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { Rating } from "@mui/material";
import moment from "moment";
interface ReviewProps {
  review: {
    id: string;
    createdDate: string;
    comment: string;
    productId: string;
    userId: {
      createdAt: string;
      email: string;
      emailVerified: null;
      hashedPassword: null;
      id: string;
      image: string;
      name: string;
      role: string;
      updatedAt: string;
    };
    rating: number;
  };
}
const ListRating = ({ review }: ReviewProps) => {
  return (
    <div>
      <div className="flex gap-2 h-auto items-center">
        <FaUserCircle />
        <p className="text-base">{review.userId.name}</p>
        <p>{moment(review.createdDate).fromNow()}</p>
      </div>
      <Rating value={review.rating} />
      <p>{review.comment}</p>
    </div>
  );
};

export default ListRating;
