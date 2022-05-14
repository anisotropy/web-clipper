import { useState } from "react";
import axios from "axios";
import DiffChecker from "./DiffChecker";
import InputUrl from "./InputUrl";

export type Article = { origin: string; readible: string };

const Home = () => {
  const [article, setArticle] = useState<Article>({
    origin: "kkk\nccc\naaa",
    readible: "kkz\naaa\nbbb",
  });

  const onWebClip = async (url: string) => {
    const { data } = await axios.get(`/api/web-clip?url=${encodeURI(url)}`);
    setArticle(data);
  };

  const onChangeArticle = (readible: string) => {
    setArticle({ ...article, readible });
  };

  return (
    <div className="text-slate-700">
      <InputUrl onChangeUrl={onWebClip} />
      <DiffChecker
        oldDoc={article.origin}
        newDoc={article.readible}
        onChangeArticle={onChangeArticle}
      />
    </div>
  );
};

export default Home;
