## 🚀 Try It Live

🔗 [MedScanAI – Live Site](https://medscanai.netlify.app/)


# 🩺 MedScan – AI-Powered Medical Image Segmentation

An AI-powered web application that allows users to upload medical images (e.g., X-rays) and receive automated segmentation and classification results using deep learning.

## 🚀 Project Overview

**MedScan** enables fast, accurate medical image analysis to assist healthcare professionals and researchers. It features a modern frontend, a Flask-based backend, and a trained deep learning model for detecting bone fractures from X-ray images.

---

## 🛠 Tech Stack

| Layer      | Technology                                        |
|------------|---------------------------------------------------|
| Frontend   | React.js, Tailwind CSS                            |
| Backend    | Python, Flask, Flask-CORS                         |
| Model      | Keras (TensorFlow backend), `.h5` trained model   |
| Tools      | Git, Git LFS (for large model files), BFG Repo Cleaner |
| Deployment | [To Be Deployed - Docker or Streamlit (optional)] |

---

## ⚙️ Features

- ✅ Upload medical images (X-rays)
- ✅ AI model performs segmentation & classification
- ✅ View prediction results on the UI
- ✅ Error handling and clean UI feedback
- ✅ LFS/Git-optimized repository (no large files tracked)

---

## 🧠 Model Info

- **Model**: Convolutional Neural Network (CNN) trained on bone fracture X-ray dataset.
- **Format**: `Keras (.h5)`
- **Usage**: Auto-loaded in backend on startup.

> 🧱 Model not included in this repo due to size.  
> 📥 **Download it [here](https://example.com/bone_fractur_model.h5)** and place it in `backend/models/`.

---

## 🧪 Run Locally

### 1. Backend (Python Flask)

```bash
cd backend
python -m venv venv
venv\Scripts\activate   # or source venv/bin/activate (Linux/Mac)
pip install -r requirements.txt
python app.py
```
### 2. Frontend (React)
```bash
cd frontend
npm install
npm start
```
---
### ⚖️ License
MIT License. Feel free to use, extend, or contribute.

--- 

### 🙋‍♂️Owner  
**Sumit Chauhan**  

---
### Connet with me:
💼 [LinkedIn](https://www.linkedin.com/in/sumit-chauhan-006399257/)






