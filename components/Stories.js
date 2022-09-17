import { faker } from '@faker-js/faker';
import { useSession } from 'next-auth/react';

const createRandomUser = () => {
  return {
    userId: faker.datatype.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  };
};
import { useEffect, useState } from 'react';
import Story from './Story';
const Stories = () => {
  const { data: session } = useSession();
  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      ...createRandomUser(),
      id: i,
    }));
    setSuggestions(suggestions);
  }, []);

  return (
    <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-slate-200 hover:scrollbar-thumb-slate-900">
      {session && (
        <Story img={session?.user.image} username={session?.user.username} />
      )}
      {suggestions.map(profileSuggestion => (
        <Story
          key={profileSuggestion.id}
          img={profileSuggestion.avatar}
          username={profileSuggestion.username}
        />
      ))}
    </div>
  );
};
export default Stories;
