import {
  TranslateText,
  SimpleTest,
  ImageTest,
  MatchingWords,
  ListeningText,
} from "./const";

const questions = [
  {
    type: TranslateText,
    question: "Hello world",
    answer: "Salom dunyo",
    words: ["olam", "do'st"],
  },
  {
    type: SimpleTest,
    question: "City",
    answer: "Shahar",
    variants: ["Qishloq", "Tuman", "Vodiy"],
  },
  {
    type: MatchingWords,
    words: [
      { en: "City", uz: "Shahar" },
      { en: "Flower", uz: "Gul" },
      { en: "School", uz: "Maktab" },
      { en: "Car", uz: "Moshina" },
      { en: "Subject", uz: "Fan" },
    ],
  },
  {
    type: ListeningText,
    question: "New Tesla Model",
    answer: "New Tesla Model",
    words: ["None", "Knew"],
  },
  {
    type: TranslateText,
    question: "It is a beautiful flower",
    answer: "Bu chiroyli gul",
    words: ["Ana u", "xunuk", "meva"],
  },
  {
    type: TranslateText,
    question: "I'm going to be a senior developer",
    answer: "Men senior dasturchi bo'lmoqchiman",
  },
];

export default questions;
