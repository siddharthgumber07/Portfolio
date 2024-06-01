import math

def min_screens_needed(x, y):
    # Calculate the number of screens needed for 2x2 icons
    screens_for_2x2 = (y + 2) // 3
    
    # Calculate the remaining cells after placing all 2x2 icons
    remaining_cells = 15 * screens_for_2x2 - 4 * y
    
    # Calculate the number of screens needed for the remaining 1x1 icons
    if x > remaining_cells:
        screens_for_1x1 = (x - remaining_cells + 14) // 15
    else:
        screens_for_1x1 = 0
    
    # Total screens needed is the sum of screens for 2x2 and 1x1 icons
    return screens_for_2x2 + screens_for_1x1

# Read input
t = int(input())
results = []
for _ in range(t):
    x, y = map(int, input().split())
    results.append(min_screens_needed(x, y))

# Output results
for result in results:
    print(result)
