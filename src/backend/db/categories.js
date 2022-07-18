import { v4 as uuid } from "uuid";

export const categories = [
  {
    _id: uuid(),
    categoryName: "Fiction",
    categoryImage: "https://i.postimg.cc/rwnYHtvB/fiction-book1.jpg",
    description:
      "literature in the form of prose, especially novels, that describes imaginary events and people",
    categoryValue: "fiction"
  },
  {
    _id: uuid(),
    categoryName: "Horror",
    categoryImage: "https://i.postimg.cc/2j0vhFhN/horror00.jpg",
    description:
      "Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
    categoryValue: "horror"
  },
  {
    _id: uuid(),
    categoryName: "Children & Teens",
    categoryImage: "https://i.postimg.cc/qqFzYwxt/childteens03.jpg",
    description:
      "Children's literature or juvenile literature includes stories, books, magazines, and poems that are created for children.",
    categoryValue: "children & teens"

  },
  {
    _id: uuid(),
    categoryName: "Personal Development",
    categoryImage: "https://i.postimg.cc/1zS4LfwK/personal-D01.jpg",
    description:
      "The goal of personal development books is to provide information, insights, and instructions for improving your life and ways of thinking.",
    categoryValue: "personal development"
  },
];
