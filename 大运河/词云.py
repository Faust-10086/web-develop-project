import jieba
from wordcloud import WordCloud
import matplotlib.pyplot as plt
import docx
import os
import csv # Add csv import
from collections import Counter # Add Counter import

# Define the directory where the script and docx files are located
script_dir = os.path.dirname(os.path.abspath(__file__))

# List of Word document filenames
file_list = ['元史.docx', '明史.docx', '清史稿.docx']
text = ''

# 1. Read content from each .docx file
for filename in file_list:
    file_path = os.path.join(script_dir, filename)
    try:
        doc = docx.Document(file_path)
        full_text = []
        for para in doc.paragraphs:
            full_text.append(para.text)
        text += '\n'.join(full_text)
        print(f"Successfully read {filename}")
    except Exception as e:
        print(f"Error reading file {filename}: {e}")

# Check if any text was read
if not text:
    print("No text was extracted from the files. Exiting.")
    exit()

# 2. Use jieba for Chinese word segmentation
print("Segmenting text...")
words = jieba.cut(text)

# Load stopwords (optional, create a 'stopwords.txt' file in the same directory)
stopwords_path = os.path.join(script_dir, 'stopwords.txt')
stopwords = set()
try:
    with open(stopwords_path, 'r', encoding='utf-8') as f:
        for line in f:
            stopwords.add(line.strip())
    print(f"Loaded stopwords from {stopwords_path}")
except FileNotFoundError:
    print("Stopwords file 'stopwords.txt' not found. Proceeding without stopword filtering.")

# Filter words: remove stopwords and single characters
filtered_words = [word for word in words if word not in stopwords and len(word) > 1]

# Check if any words left after filtering
if not filtered_words:
    print("No words left after filtering. Cannot generate word cloud or frequency table.")
    exit()

# 2.5 Calculate word frequencies
print("Calculating word frequencies...")
word_counts = Counter(filtered_words)

# Define CSV output path
csv_output_filename = 'word_frequencies.csv'
csv_output_path = os.path.join(script_dir, csv_output_filename)

# Save frequencies to CSV
try:
    with open(csv_output_path, 'w', newline='', encoding='utf-8-sig') as csvfile: # Use utf-8-sig for Excel compatibility
        writer = csv.writer(csvfile)
        # Write header
        writer.writerow(['Word', 'Frequency'])
        # Write word counts, sorted by frequency descending
        for word, count in word_counts.most_common():
            writer.writerow([word, count])
    print(f"Word frequencies saved to '{csv_output_path}'")
except Exception as e:
    print(f"Error saving word frequencies to CSV: {e}")

# Prepare text for WordCloud (join filtered words)
result = ' '.join(filtered_words)

# 3. Generate the word cloud
print("Generating word cloud...")
# Specify a font path that supports Chinese characters. Adjust if necessary.
# Common paths: 'C:/Windows/Fonts/simhei.ttf' (Windows), '/System/Library/Fonts/STHeiti Medium.ttc' (macOS)
# If using Linux, you might need to install a Chinese font like Noto Sans CJK or WenQuanYi Micro Hei.
font_path = 'C:/Windows/Fonts/simhei.ttf' # Example for Windows, adjust if needed

try:
    # Generate word cloud from frequencies for better accuracy with max_words
    wc = WordCloud(font_path=font_path,
                   width=800,
                   height=600,
                   background_color='white',
                   max_words=200, # Limit the number of words displayed
                   collocations=False # Avoids grouping common word pairs
                   ).generate_from_frequencies(word_counts) # Use generate_from_frequencies

    # 4. Display the word cloud
    plt.figure(figsize=(10, 5))
    plt.imshow(wc, interpolation='bilinear')
    plt.axis('off')
    plt.show()

    # 5. Save the word cloud image
    output_filename = 'wordcloud.png'
    output_path = os.path.join(script_dir, output_filename)
    wc.to_file(output_path)
    print(f"Word cloud image saved as '{output_path}'")

except Exception as e:
    print(f"Error generating or displaying word cloud: {e}")
    print("Please ensure the font path is correct and the necessary libraries are installed.")

print("Script finished.")