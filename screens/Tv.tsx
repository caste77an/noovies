import React from "react";
import { FlatList, ScrollView } from "react-native";
import { useQuery } from "react-query";
import { tvApi } from "../api";
import HList from "../components/HList";
import Loader from "../components/Loader";
import VMedia, { HListSeparator } from "../components/VMedia";

const Tv = () => {
  const { isLoading: todayLoading, data: todayData } = useQuery(
    ["tv", "today"],
    tvApi.airingToday
  );
  const { isLoading: topLoading, data: topData } = useQuery(
    ["tv", "top"],
    tvApi.topRated
  );
  const { isLoading: trendingLoading, data: trendingData } = useQuery(
    ["tv", "trending"],
    tvApi.trending
  );

  const loading = todayLoading || topLoading || trendingLoading;

  if (loading) {
    return <Loader />;
  }

  return (
    <ScrollView contentContainerStyle={{ paddingVertical: 30 }}>
      <HList title="Trending TV">
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={HListSeparator}
          contentContainerStyle={{ paddingHorizontal: 30 }}
          data={trendingData.results}
          renderItem={({ item }) => (
            <VMedia
              posterPath={item.poster_path}
              originalTitle={item.original_name}
              voteAverage={item.vote_average}
            />
          )}
        />
      </HList>
      <HList title="Airing Today">
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={HListSeparator}
          contentContainerStyle={{ paddingHorizontal: 30 }}
          data={todayData.results}
          renderItem={({ item }) => (
            <VMedia
              posterPath={item.poster_path}
              originalTitle={item.original_name}
              voteAverage={item.vote_average}
            />
          )}
        />
      </HList>
      <HList title="Top Rated TV">
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={HListSeparator}
          contentContainerStyle={{ paddingHorizontal: 30 }}
          data={topData.results}
          renderItem={({ item }) => (
            <VMedia
              posterPath={item.poster_path}
              originalTitle={item.original_name}
              voteAverage={item.vote_average}
            />
          )}
        />
      </HList>
    </ScrollView>
  );
};

export default Tv;
