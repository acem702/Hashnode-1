import type { GetServerSideProps, NextPage } from "next";
import { getServerSession, type Session } from "next-auth";
import { useSession } from "next-auth/react";
import { useContext, useEffect } from "react";
import { Aside, Header, MainTagBody, RightAsideMain } from "~/component";
import TagSEO from "~/SEO/Tag.seo";
import { authOptions } from "~/server/auth";
import { prisma } from "~/server/db";
import type { DetailedTag } from "~/types";
import { C, type ContextValue } from "~/utils/context";

const SingleTag: NextPage<{ tagDetails: DetailedTag }> = ({ tagDetails }) => {
  const { data: session } = useSession();
  const { setUser } = useContext(C) as ContextValue;

  useEffect(() => {
    setUser(session);
  }, []);

  return (
    <>
      <TagSEO tagDetails={tagDetails} />

      <Header />

      <main className="min-h-screen w-full bg-light-bg dark:bg-black">
        <div className="container-body mx-auto max-w-[1550px] gap-4 sm:px-4">
          <Aside />
          <MainTagBody tagDetails={tagDetails} />
          <RightAsideMain tagDetails={tagDetails} />
        </div>
      </main>
    </>
  );
};

export default SingleTag;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getServerSession(context.req, context.res, authOptions);
  const params = context.params?.slug as string;

  if (!params) {
    return {
      props: {
        session: session,
        tagDetails: null,
      },
      redirect: {
        destination: "/",
      },
    };
  }

  const tagDetails = await prisma.tag.findUnique({
    where: {
      slug: params,
    },
    include: {
      followers: {
        select: {
          id: true,
        },
      },
      articles: {
        select: {
          id: true,
        },
      },
    },
  });

  return {
    props: {
      session: session
        ? (JSON.parse(JSON.stringify(session)) as Session)
        : null,
      tagDetails: JSON.parse(JSON.stringify(tagDetails)) as DetailedTag,
    },
  };
};
