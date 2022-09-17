import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],

  // Customize the default login screen,.
  theme: {
    logo: 'https://links.papareact.com/sq0',
    brandColor: '#F13287',
    colorScheme: 'auto',
  },

  // Custom Page entirely
  pages: {
    signIn: '/auth/signin',
  },

  // modify session callback
  callbacks: {
    async session({ session, token, user }) {
      session.user.username = session.user.name
        .split(' ')
        .join('')
        .toLocaleLowerCase();

      session.user.uid = token.sub;
      return session;
    },
  },
};
export default NextAuth(authOptions);
