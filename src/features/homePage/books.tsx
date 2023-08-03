import { getBooks } from '@/api';
import { useInfiniteQuery } from '@tanstack/react-query';
import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Book } from './types';
import Card from './card';
import Loader from '@/components/loader';
import NoData from '@/components/noData';

function Books() {
  const { data, fetchNextPage, hasNextPage, isLoading } = useInfiniteQuery(['books'], getBooks, {
    getNextPageParam: (lastPage, pages) => (lastPage?.hasNext ? pages?.length + 1 : undefined),
  });

  const handleRefresh = () => {
    fetchNextPage({ pageParam: 1 });
  };

  const books = data?.pages?.flatMap((page) => page?.data) ?? [];

  return (
    <>
      <InfiniteScroll
        dataLength={books.length ?? 0}
        next={fetchNextPage}
        hasMore={!!hasNextPage}
        loader={<Loader />}
        refreshFunction={handleRefresh}
        pullDownToRefresh
        pullDownToRefreshThreshold={80}
        pullDownToRefreshContent={
          <h3 className="text-center w-full py-3 text-sm text-gray-600">&#8595; Pull down to refresh</h3>
        }
        releaseToRefreshContent={<h3 className="text-center w-full py-3 text-sm text-gray-600">&#8595; Release to refresh</h3>}>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-1 gap-y-2.5">
          {books.map((item: Book, index: number) => (
            <Card key={index} details={item} />
          ))}
        </div>
      </InfiniteScroll>

      {isLoading && <Loader />}
      {!isLoading && !books.length && <NoData />}
    </>
  );
}

export default Books;
