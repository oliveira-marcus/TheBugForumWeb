import PostContentInput from "../components/common/Post/PostContentInput";
import CategorySelect from "../components/common/Post/CategorySelect";
import TextInput from "../components/common/TextInput";
import { useState } from "react";

export default function Submit() {
  const [category, setCategory] = useState<string>();

  return (
    <main className="lg:col-span-9 space-y-4">
      <form action="" className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold">Criar Post</h2>
        <CategorySelect value={category} onChange={setCategory} />

        <TextInput placeholder="Título" />

        <div>
          <PostContentInput />

          <button
            type="submit"
            className="flex items-center gap-2 px-2 py-2 rounded-2xl ml-auto
                       bg-blue-600 hover:bg-blue-500 text-white text-sm
                       transition cursor-pointer"
          >
            Postar
          </button>
        </div>
      </form>
    </main>
  );
}
