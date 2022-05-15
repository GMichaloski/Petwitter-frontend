import React from "react";
import { Flex } from "@chakra-ui/layout";
import InfiniteScroll from "react-infinite-scroll-component";
import { useInfiniteQuery } from "react-query";
import { getFeed } from "../services/petweets";
import { Spinner, Text } from "@chakra-ui/react";
import Petweet from "./Petweet";

export default function Timeline(props) {
  const petweetHeight = props.petweetHeight;
  const { data, error, fetchNextPage, hasNextPage, isFetching, status } =
    useInfiniteQuery("getFeed", getFeed, {
      getNextPageParam: (lastPage, pages) => {
        return lastPage.nextPage;
      },
    });
  return (
    <Flex flexDir="column">
      {!!data && (
        <InfiniteScroll
          dataLength={data.pages.length * 10}
          hasMore={hasNextPage}
          next={fetchNextPage}
          height={petweetHeight}
          endMessage={<Text> FIM DOS PETWEETS</Text>}
        >
          {data.pages.map((post_data) => {
            return post_data.results.data.map((results) => (
              <Petweet
                key={results.id}
                userId={results.user_id}
                content={results.content}
                createAt={results.created_at}
                petweetWidth={["", "54vw"]}
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
