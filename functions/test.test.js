import { describe, test, expect} from 'vitest'
import { addition } from './som'

describe('somtest', () => {
test('1 + 2 = 3', () => {
    expect(addition(1,2)).toBe(3)
})
})