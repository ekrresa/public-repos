import Caret from '../public/down-caret.svg';
import License from '../public/license.svg';
import Star from '../public/star.svg';

export function Repository() {
  return (
    <div className="py-7 flex border-b items-start justify-between">
      <div className="flex-1">
        <div className="flex items-end gap-4 mb-4">
          <h3 className="text-link text-xl font-semibold">public-repos</h3>
          <span className="border border-marker text-xs px-2 py-[2px] rounded-xl text-secondary">
            Public
          </span>
        </div>

        <div className="flex gap-4 text-secondary">
          <div className="flex items-center">
            <span className="inline-block bg-cyan-700 rounded-full w-3 h-3"></span>
            <span className="text-xs ml-1">TypeScript</span>
          </div>

          <div className="flex gap-2 items-center">
            <License className="w-4 fill-secondary" />
            <span className="text-xs">MIT License</span>
          </div>

          <p className="text-xs">Updated 4 days ago</p>
        </div>
      </div>

      <div className="flex">
        <button className="flex bg-shade border border-marker px-4 py-[6px] rounded-l-lg text-xs text-secondary">
          <Star className="w-4" />
          <span className="text-xs ml-1">Star</span>
        </button>
        <button className="bg-shade border-y border-r border-marker rounded-r-lg px-2">
          <Caret className="w-4" />
        </button>
      </div>
    </div>
  );
}
