import React from "react";
import { Flex } from "@chakra-ui/layout";
import InfiniteScroll from "react-infinite-scroll-component";
import { useInfiniteQuery } from "react-query";
import { getUserPosts } from "../services/petweets";
import { useNavigate, useParams } from "react-router-dom";
import { Spinner, Text } from "@chakra-ui/react";
import Petweet from "./Petweet";
import { getFromStorage } from "../services/auth";

export default function SpecificTimeline(props) {
  const petweetWidth = props.petweetWidth;
  const { userId } = useParams();
  const navigate = useNavigate();
  const { data, error, fetchNextPage, hasNextPage, isFetching } =
    useInfiniteQuery(
      ["userFeed", userId],
      ({ pageParam }) =>
        getUserPosts({
          user_id: !userId ? getFromStorage("user")?.id : userId,
          page: pageParam,
        }),
      {
        getNextPageParam: (lastPage, pages) => {
          return lastPage.nextPage;
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
      {!!data && (
        <InfiniteScroll
          dataLength={data.pages.length * 10}
          hasMore={hasNextPage}
          next={fetchNextPage}
          height="75vh"
          endMessage={<Text> FIM DOS PETWEETS</Text>}
        >
          {data.pages.map((post_data) => {
            return post_data.results.data.map((results) => (
              <Petweet
                key={results.id}
                userId={results.user_id}
                content={results.content}
                createAt={results.created_at}
                petweetWidth={petweetWidth}
              />
            ));
          })}
          {isFetching && (
            <Flex height="6rem" alignItems="center" justifyContent="center">
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="cyan.400"
                size="xl"
              />
            </Flex>
          )}
        </InfiniteScroll>
      )}
    </Flex>
  );
}
