import React from "react";
import { Flex } from "@chakra-ui/layout";
import InfiniteScroll from "react-infinite-scroll-component";
import { useInfiniteQuery } from "react-query";
import { getFeed } from "../services/petweets";
import { useNavigate } from "react-router-dom";
import { Spinner, Text } from "@chakra-ui/react";
import Petweet from "./Petweet";

export default function Timeline() {
  const navigate = useNavigate();
  const {
    data: Posts,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
  } = useInfiniteQuery(
    "feed",
    ({ pageParam }) =>
      getFeed({
        pageParam,
      }),
    {
      getNextPageParam: (lastPage, pages) => {
        if (pages.length === lastPage.data.totalPages) {
          return undefined;
        }
        return pages.length + 1;
      },
      onError: (error) => {
        const { name, message, status } = error.toJSON();
        if (status === 401) {
          navigate("/login");
        }
      },
    }
  );

  return (
    <Flex flexDir="column">
      {!!Posts && (
        <InfiniteScroll
          dataLength={Posts.pages.length * 10}
          hasMore={hasNextPage}
          next={fetchNextPage}
          height="80vh"
          endMessage={<Text> FIM DOS PETWEETS</Text>}
        >
          {Posts.pages[0].data.map((post_data) => (
            <Petweet
              key={post_data.id}
              userId={post_data.user_id}
              content={post_data.content}
              createAt={post_data.created_at}
            />
          ))}
        </InfiniteScroll>
      )}
      {isFetching && (
        <Flex
          width="100%"
          height="6rem"
          alignItems="center"
          justifyContent="center"
        >
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="cyan.400"
            size="xl"
          />
        </Flex>
      )}
    </Flex>
  );
}
