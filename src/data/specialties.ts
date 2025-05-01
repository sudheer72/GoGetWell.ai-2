import { ThemeType } from '../types/theme';

export interface Subspecialty {
  id: string;
  name: string;
}

export interface Specialty {
  id: string;
  name: string;
  icon: string;
  subspecialties: Subspecialty[];
  themeId?: ThemeType;
}

export const specialties: Specialty[] = [
  {
    id: 'organTransplant',
    name: 'Organ Transplant',
    icon: 'hospital',
    themeId: 'organTransplant',
    subspecialties: [
      { id: 'kidney', name: 'Kidney Transplant' },
      { id: 'liver', name: 'Liver Transplant' },
      { id: 'heart', name: 'Heart Transplant' },
      { id: 'lung', name: 'Lung Transplant' },
      { id: 'pancreas', name: 'Pancreas Transplant' }
    ]
  },
  {
    id: 'cardiology',
    name: 'Cardiology',
    icon: 'heart',
    themeId: 'cardiology',
    subspecialties: [
      { id: 'coronary', name: 'Coronary Artery Disease' },
      { id: 'heart-failure', name: 'Heart Failure' },
      { id: 'arrhythmias', name: 'Arrhythmias' },
      { id: 'valvular', name: 'Valvular Heart Disease' },
      { id: 'congenital', name: 'Congenital Heart Disease' }
    ]
  },
  {
    id: 'neurology',
    name: 'Neurology',
    icon: 'brain',
    subspecialties: [
      { id: 'stroke', name: 'Stroke' },
      { id: 'alzheimers', name: 'Alzheimer\'s Disease' },
      { id: 'parkinsons', name: 'Parkinson\'s Disease' },
      { id: 'multiple-sclerosis', name: 'Multiple Sclerosis' },
      { id: 'epilepsy', name: 'Epilepsy' }
    ]
  },
  {
    id: 'orthopedics',
    name: 'Orthopedics',
    icon: 'bone',
    subspecialties: [
      { id: 'joint-replacement', name: 'Joint Replacement Surgery' },
      { id: 'fracture-repair', name: 'Fracture Repair' },
      { id: 'sports-medicine', name: 'Sports Medicine' },
      { id: 'spinal-surgery', name: 'Spinal Surgery' },
      { id: 'orthopedic-trauma', name: 'Orthopedic Trauma' }
    ]
  },
  {
    id: 'oncology',
    name: 'Oncology',
    icon: 'zap',
    subspecialties: [
      { id: 'breast-cancer', name: 'Breast Cancer' },
      { id: 'lung-cancer', name: 'Lung Cancer' },
      { id: 'colorectal-cancer', name: 'Colorectal Cancer' },
      { id: 'prostate-cancer', name: 'Prostate Cancer' },
      { id: 'leukemia', name: 'Leukemia' }
    ]
  },
  {
    id: 'dermatology',
    name: 'Dermatology',
    icon: 'eye',
    subspecialties: [
      { id: 'acne', name: 'Acne' },
      { id: 'eczema', name: 'Eczema' },
      { id: 'psoriasis', name: 'Psoriasis' },
      { id: 'skin-cancer', name: 'Skin Cancer' },
      { id: 'rosacea', name: 'Rosacea' }
    ]
  },
  {
    id: 'gastroenterology',
    name: 'Gastroenterology',
    icon: 'flask-conical',
    subspecialties: [
      { id: 'gerd', name: 'Gastroesophageal Reflux Disease (GERD)' },
      { id: 'ibd', name: 'Inflammatory Bowel Disease' },
      { id: 'liver-disease', name: 'Liver Disease' },
      { id: 'pancreatitis', name: 'Pancreatitis' },
      { id: 'gallstones', name: 'Gallstones' }
    ]
  },
  {
    id: 'pulmonology',
    name: 'Pulmonology',
    icon: 'lungs',
    subspecialties: [
      { id: 'asthma', name: 'Asthma' },
      { id: 'copd', name: 'Chronic Obstructive Pulmonary Disease (COPD)' },
      { id: 'pneumonia', name: 'Pneumonia' },
      { id: 'pulmonary-fibrosis', name: 'Pulmonary Fibrosis' },
      { id: 'lung-cancer-pulm', name: 'Lung Cancer' }
    ]
  },
  {
    id: 'endocrinology',
    name: 'Endocrinology',
    icon: 'flask',
    subspecialties: [
      { id: 'diabetes', name: 'Diabetes Mellitus' },
      { id: 'thyroid', name: 'Thyroid Disorders' },
      { id: 'obesity', name: 'Obesity' },
      { id: 'osteoporosis', name: 'Osteoporosis' },
      { id: 'pcos', name: 'Polycystic Ovary Syndrome (PCOS)' }
    ]
  },
  {
    id: 'nephrology',
    name: 'Nephrology',
    icon: 'droplets',
    subspecialties: [
      { id: 'ckd', name: 'Chronic Kidney Disease' },
      { id: 'hypertension', name: 'Hypertension' },
      { id: 'kidney-stones', name: 'Kidney Stones' },
      { id: 'aki', name: 'Acute Kidney Injury' },
      { id: 'glomerulonephritis', name: 'Glomerulonephritis' }
    ]
  },
  {
    id: 'rheumatology',
    name: 'Rheumatology',
    icon: 'activity',
    subspecialties: [
      { id: 'ra', name: 'Rheumatoid Arthritis' },
      { id: 'oa', name: 'Osteoarthritis' },
      { id: 'lupus', name: 'Lupus' },
      { id: 'spondyloarthropathies', name: 'Spondyloarthropathies' },
      { id: 'gout', name: 'Gout' }
    ]
  },
  {
    id: 'urology',
    name: 'Urology',
    icon: 'kidney',
    subspecialties: [
      { id: 'bph', name: 'Benign Prostatic Hyperplasia (BPH)' },
      { id: 'uti', name: 'Urinary Tract Infections' },
      { id: 'kidney-stones-urol', name: 'Kidney Stones' },
      { id: 'prostate-cancer-urol', name: 'Prostate Cancer' },
      { id: 'erectile-dysfunction', name: 'Erectile Dysfunction' }
    ]
  },
  {
    id: 'psychiatry',
    name: 'Psychiatry',
    icon: 'brain',
    subspecialties: [
      { id: 'depression', name: 'Depression' },
      { id: 'anxiety', name: 'Anxiety Disorders' },
      { id: 'bipolar', name: 'Bipolar Disorder' },
      { id: 'schizophrenia', name: 'Schizophrenia' },
      { id: 'ptsd', name: 'Post-Traumatic Stress Disorder (PTSD)' }
    ]
  },
  {
    id: 'ophthalmology',
    name: 'Ophthalmology',
    icon: 'eye',
    subspecialties: [
      { id: 'cataracts', name: 'Cataracts' },
      { id: 'glaucoma', name: 'Glaucoma' },
      { id: 'macular-degeneration', name: 'Macular Degeneration' },
      { id: 'diabetic-retinopathy', name: 'Diabetic Retinopathy' },
      { id: 'refractive-errors', name: 'Refractive Errors' }
    ]
  },
  {
    id: 'hematology',
    name: 'Hematology',
    icon: 'droplet',
    subspecialties: [
      { id: 'anemia', name: 'Anemia' },
      { id: 'hemophilia', name: 'Hemophilia' },
      { id: 'thrombosis', name: 'Thrombosis' },
      { id: 'leukemia-hema', name: 'Leukemia' },
      { id: 'lymphoma', name: 'Lymphoma' }
    ]
  },
  {
    id: 'infectious-diseases',
    name: 'Infectious Diseases',
    icon: 'virus',
    subspecialties: [
      { id: 'hiv', name: 'HIV/AIDS' },
      { id: 'influenza', name: 'Influenza' },
      { id: 'tuberculosis', name: 'Tuberculosis' },
      { id: 'malaria', name: 'Malaria' },
      { id: 'hepatitis', name: 'Hepatitis' }
    ]
  },
  {
    id: 'allergy-immunology',
    name: 'Allergy & Immunology',
    icon: 'shield',
    subspecialties: [
      { id: 'allergic-rhinitis', name: 'Allergic Rhinitis' },
      { id: 'asthma-ai', name: 'Asthma' },
      { id: 'food-allergy', name: 'Food Allergy' },
      { id: 'autoimmune', name: 'Autoimmune Diseases' },
      { id: 'immunodeficiency', name: 'Immunodeficiency Disorders' }
    ]
  },
  {
    id: 'geriatrics',
    name: 'Geriatrics',
    icon: 'user',
    subspecialties: [
      { id: 'dementia', name: 'Dementia' },
      { id: 'falls', name: 'Falls' },
      { id: 'delirium', name: 'Delirium' },
      { id: 'urinary-incontinence', name: 'Urinary Incontinence' },
      { id: 'polypharmacy', name: 'Polypharmacy' }
    ]
  },
  {
    id: 'obstetrics-gynecology',
    name: 'Obstetrics & Gynecology',
    icon: 'baby',
    subspecialties: [
      { id: 'pregnancy', name: 'Pregnancy' },
      { id: 'menstrual-disorders', name: 'Menstrual Disorders' },
      { id: 'endometriosis', name: 'Endometriosis' },
      { id: 'pcos-obgyn', name: 'Polycystic Ovary Syndrome (PCOS)' },
      { id: 'cervical-cancer', name: 'Cervical Cancer' }
    ]
  },
  {
    id: 'pediatrics',
    name: 'Pediatrics',
    icon: 'baby',
    subspecialties: [
      { id: 'childhood-obesity', name: 'Childhood Obesity' },
      { id: 'autism', name: 'Autism Spectrum Disorder' },
      { id: 'adhd', name: 'Attention-Deficit/Hyperactivity Disorder (ADHD)' },
      { id: 'pediatric-asthma', name: 'Pediatric Asthma' },
      { id: 'pediatric-cancer', name: 'Pediatric Cancer' }
    ]
  },
  {
    id: 'emergency-medicine',
    name: 'Emergency Medicine',
    icon: 'siren',
    subspecialties: [
      { id: 'trauma', name: 'Trauma' },
      { id: 'heart-attack', name: 'Heart Attack' },
      { id: 'stroke-em', name: 'Stroke' },
      { id: 'respiratory-distress', name: 'Respiratory Distress' },
      { id: 'sepsis', name: 'Sepsis' }
    ]
  }
];