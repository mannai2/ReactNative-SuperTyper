import fitz
import re
import json

def extract_text_from_pdf(pdf_path):
    text = ""
    
    pdf_document = fitz.open(pdf_path)
    
    for page_num in range(pdf_document.page_count):
        page = pdf_document.load_page(page_num)
        page_text = page.get_text()
        
        
        page_text = page_text.replace('.', '').replace('\n', ' ')
        
        
        page_text = page_text.lower()
        
        
        page_text = re.sub(r'[^a-zA-Z0-9\s]', '', page_text)
        
        text += page_text
    
    return text

def split_text_into_chunks(text, max_words_per_chunk=50):
    words_with_spaces = re.findall(r'\S+|\s+', text)
    
    chunks = []
    current_chunk = ""
    word_count = 0
    
    for word_or_space in words_with_spaces:
        current_chunk += word_or_space
        word_count += 1
        
        if word_count >= max_words_per_chunk:
            chunks.append(current_chunk)
            current_chunk = ""
            word_count = 0
    
    if current_chunk:
        chunks.append(current_chunk)
    
    return chunks

if __name__ == "__main__":
    pdf_path = "book.pdf"  
    extracted_text = extract_text_from_pdf(pdf_path)
    chunks = split_text_into_chunks(extracted_text, max_words_per_chunk=50)
    
    with open('text.json', 'w', encoding='utf-8') as json_file:
        json.dump(chunks, json_file, ensure_ascii=False, indent=4)
