import os

# Define dataset structure
directories = [
    "dataset/bone_fracture/test/fractured",
    "dataset/bone_fracture/test/not_fractured"
]

# Create directories if they don't exist
for directory in directories:
    os.makedirs(directory, exist_ok=True)

print("Dataset folders created! Add images to 'test/fractured' and 'test/not_fractured'.")
