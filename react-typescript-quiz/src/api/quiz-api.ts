import axios from "axios";
import {
  FetchQuizCategoriesResp,
  FetchQuizParams,
  FetchQuizResp,
  QuizCategory,
  QuizItem,
} from "../types/quiz-type";

const BASE_URL = "https://opentdb.com";

export class QuizApi {
  static async fetchCategories(): Promise<QuizCategory[]> {
    const { data } = await axios.get<FetchQuizCategoriesResp>(
      `${BASE_URL}/api_category.php`
    );

    return data.trivia_categories;
  }

  static async fetchQuiz(params: FetchQuizParams): Promise<QuizItem[]> {
    const { data } = await axios.get<FetchQuizResp>(`${BASE_URL}/api.php`, {
      params,
    });
    return data.results;
  }
}
