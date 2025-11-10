import sys, base64, json, numpy as np, pandas as pd
from pathlib import Path

def generate_sample_predictions(percentile, category, branch_filter):
    # Sample college data (you can expand this list)
    colleges = [
        {"college_name": "College of Engineering, Pune", "branch": "Computer Engineering"},
        {"college_name": "VJTI Mumbai", "branch": "Information Technology"},
        {"college_name": "SPIT Mumbai", "branch": "Computer Engineering"},
        {"college_name": "ICT Mumbai", "branch": "Chemical Engineering"},
        {"college_name": "COEP Technology University", "branch": "Mechanical Engineering"},
        {"college_name": "Walchand College of Engineering", "branch": "Electronics Engineering"},
        {"college_name": "Government College of Engineering, Aurangabad", "branch": "Civil Engineering"},
        {"college_name": "VJTI Mumbai", "branch": "Computer Science and Engineering (AI & ML)"},
        {"college_name": "Veermata Jijabai Technological Institute", "branch": "Electronics and Telecommunication"},
        {"college_name": "Government College of Engineering, Karad", "branch": "Electrical Engineering"}
    ]
    
    # Convert to DataFrame
    df = pd.DataFrame(colleges)
    
    # Filter by branch if specified
    if branch_filter:
        df = df[df["branch"].str.lower().str.contains(branch_filter.lower())]
    
    if len(df) == 0:
        df = pd.DataFrame(colleges)  # Reset if no matches
    
    # Generate probabilities based on percentile
    df["pred_prob"] = np.random.normal(percentile/100, 0.1, size=len(df))
    df["pred_prob"] = df["pred_prob"].clip(0, 1)  # Ensure probabilities are between 0 and 1
    
    # Adjust probabilities based on category
    category_boost = {
        "GEN": 0,
        "OBC": 0.05,
        "SC": 0.1,
        "ST": 0.1,
        "EWS": 0.03
    }
    df["pred_prob"] = df["pred_prob"] + category_boost.get(category, 0)
    df["pred_prob"] = df["pred_prob"].clip(0, 1)
    
    # Assign safety levels
    df["safety"] = pd.cut(
        df["pred_prob"], 
        bins=[0, 0.4, 0.6, 0.8, 1], 
        labels=["Reach", "Borderline", "Likely", "Safe"]
    )
    
    # Sort by probability
    df = df.sort_values("pred_prob", ascending=False)
    
    return df

if __name__ == "__main__":
    # Parse input data
    data = json.loads(base64.b64decode(sys.argv[1]).decode("utf8"))
    percentile = float(data.get("percentile", 0))
    category = data.get("category", "GEN")
    branch_filter = data.get("branch", "")
    
    # Generate predictions
    results = generate_sample_predictions(percentile, category, branch_filter)
    
    # Convert to JSON and print
    print(results.to_json(orient="records"))
