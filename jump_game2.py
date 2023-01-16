# LeetCode: Jump Game II
# Link: https://leetcode.com/problems/jump-game-ii/submissions/

class Solution:
    def jump(self, nums: List[int]) -> int:
        res = 0
        left = 0
        right = 0

        while right < len(nums) - 1:
            far = 0
            for i in range(left, right + 1):
                far = max(far, i + nums[i])
            
            left = right + 1
            right = far
            res += 1

        return res
