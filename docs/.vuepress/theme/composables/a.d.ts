import { ComputedRef } from "vue";

interface Paper<T extends Record<string, unknown> = Record<string, unknown>> {
  /**
   * Paper path
   *
   * 文章路径
   */
  path: string;
  /**
   * Paper info
   *
   * 文章信息
   */
  info: T;
}

interface PaperTypeData<T extends Record<string, unknown> = Record<string, unknown>> {
  /**
   * Type path
   *
   * 类别路径
   */
  path: string;
  /**
   * Items under current type
   *
   * 当前类别下的项目
   */
  items: Paper<T>[];
}

declare const usePaperType: <T extends Record<string, unknown> = Record<string, unknown>>(key?: string) => ComputedRef<Paper<T>>;

export { usePaperType };
