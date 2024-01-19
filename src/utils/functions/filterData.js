export const filterData = (searchText, info) => {
  return info.filter((info) =>
    info?.snippet?.channelTitle?.toLowerCase()?.includes(searchText?.toLowerCase()) ||
    info?.snippet?.localized?.description?.toLowerCase()?.includes(searchText?.toLowerCase()) ||
    info?.snippet?.localized?.title?.toLowerCase()?.includes(searchText?.toLowerCase()) ||
    info?.snippet?.tags?.some(tag => tag?.toLowerCase()?.includes(searchText?.toLowerCase()))
  );
};
