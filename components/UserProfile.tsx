import Location from '../public/location.svg';
import Mail from '../public/mail.svg';
import People from '../public/people.svg';

export default function UserProfile() {
  return (
    <aside className="relative -top-12 flex flex-col">
      <div className="bg-slate-400 w-full max-w-[296px] rounded-full aspect-square"></div>

      <div className="relative -z-10">
        <div className="mb-6 mt-8">
          <h3 className="text-primary text-2xl font-semibold">Ochuko Ekrresa</h3>
          <p className="text-secondary">ekrresa</p>
        </div>

        <p className="text-base text-primary mb-4">Software Developer</p>

        <button className="w-full rounded-md bg-shade border border-marker mb-4 text-sm py-[5px] font-medium text-primary">
          Edit profile
        </button>

        <div className="flex items-center gap-1 mb-6">
          <div className="text-primary text-sm font-bold flex">
            <People className="w-4 fill-secondary mr-1" />
            26
            <span className="text-secondary font-normal ml-1">followers</span>
          </div>
          <span>&#183;</span>
          <div className="text-primary text-sm font-bold">
            29
            <span className="text-secondary font-normal ml-1">following</span>
          </div>
        </div>

        <div className="flex mb-1">
          <Location className="w-[0.9rem] mr-2 fill-secondary" />
          <p className="text-link text-sm">Lagos, Nigeria</p>
        </div>

        <div className="flex">
          <Mail className="w-[0.9rem] mr-2 fill-secondary" />
          <p className="text-sm text-primary">kelvinekrresa@gmail.com</p>
        </div>
      </div>
    </aside>
  );
}
