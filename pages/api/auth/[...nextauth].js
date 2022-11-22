import bcryptjs from 'bcryptjs';
<<<<<<< HEAD
=======
import User from '../../../models/User';
import db from '../../../utils/db';
import CredentialsProvider from 'next-auth/providers/credentials';
>>>>>>> b2419482b9c07c51cf4b2d99960ee3a872d8af42
import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';
import User from '../../../models/User';
import db from '../../../utils/db';

export default NextAuth({
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user?._id) token._id = user._id;
      if (user?.isAdmin) token.isAdmin = user.isAdmin;
      return token;
    },
    async session({ session, token }) {
      if (token?._id) session.user._id = token._id;
      if (token?.isAdmin) session.user.isAdmin = token.isAdmin;
      return session;
    },
  },
<<<<<<< HEAD

  // connection to the database(MongoDB) to get the user info
=======
  //Mangodb base auth
>>>>>>> b2419482b9c07c51cf4b2d99960ee3a872d8af42
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        await db.connect();
        const user = await User.findOne({
          email: credentials.email,
        });
<<<<<<< HEAD
        //look up if the credentials the users entered correct
=======
>>>>>>> b2419482b9c07c51cf4b2d99960ee3a872d8af42
        await db.disconnect();
        if (user && bcryptjs.compareSync(credentials.password, user.password)) {
          return {
            _id: user._id,
            name: user.name,
            email: user.email,
<<<<<<< HEAD
            image: 'f',
            isAdmin: user.isAdmin,
          };
        }
        //if it is not correct return error message
=======
            image: '',
            isAdmin: user.isAdmin,
          };
        }
>>>>>>> b2419482b9c07c51cf4b2d99960ee3a872d8af42
        throw new Error('Invalid email or password');
      },
    }),
  ],
});
