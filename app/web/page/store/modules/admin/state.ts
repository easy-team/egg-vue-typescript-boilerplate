import Article from '../../../../../model/article';

export default interface AdminState {
  articleTotal: number;
  articleList: Article[];
  article?: Article;
}