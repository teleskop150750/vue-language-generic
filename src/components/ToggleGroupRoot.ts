export type ToggleGroupType = 'single' | 'multiple'

export interface ToggleGroupProps<T extends ToggleGroupType> {
  type: T
}
