// 这个文件将在后续集成SWR库时使用
// 目前项目中没有安装SWR库，所以这里只是一个占位文件
// 安装SWR: npm install swr

/**
 * SWR配置
 * 用于全局配置SWR的行为
 * 包括重试策略、缓存时间、错误处理等
 */
export const swrConfig = {
  // 重试次数
  errorRetryCount: 3,
  // 重试间隔（毫秒）
  errorRetryInterval: 5000,
  // 缓存时间（毫秒）
  dedupingInterval: 2000,
  // 是否在窗口聚焦时重新验证
  revalidateOnFocus: true,
  // 是否在网络恢复时重新验证
  revalidateOnReconnect: true,
  // 是否在挂载时重新验证
  revalidateOnMount: true,
  // 是否在窗口可见时重新验证
  revalidateIfStale: true,
  // 是否在错误时重试
  shouldRetryOnError: true,
  // 是否在成功时重新验证
  refreshWhenHidden: false,
  // 是否在离线时重新验证
  refreshWhenOffline: false,
  // 是否在窗口聚焦时暂停
  pauseOnFocusLoss: false,
  // 是否使用本地缓存
  suspense: false,
};

/**
 * 使用SWR获取GitHub仓库数据
 * @param {string} path - API路径
 * @returns {Object} - SWR响应对象
 */
export function useGitHubData(path) {
  // 这里是SWR的使用示例，需要安装SWR库后才能使用
  // const { data, error, isLoading, mutate } = useSWR(path, fetcher, swrConfig);
  // return { data, error, isLoading, mutate };

  // 返回一个占位对象
  return {
    data: null,
    error: null,
    isLoading: true,
    mutate: () => { },
  };
}

/**
 * SWR数据获取器
 * @param {string} url - 请求URL
 * @returns {Promise<any>} - 响应数据
 */
export async function fetcher(url) {
  // 这里是一个简单的fetcher函数，用于SWR库
  const res = await fetch(url);

  // 如果响应不成功，抛出错误
  if (!res.ok) {
    const error = new Error('请求失败');
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
}