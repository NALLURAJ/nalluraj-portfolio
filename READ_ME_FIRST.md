# Portfolio update, September 23 2026

This folder is a **fresh clone of github.com/NALLURAJ/nalluraj-portfolio** (current `main`) with the ShipSignal updates applied. Use this one.

## Why not the old folder
`/Users/nalluraj/nalluraj-portfolio` is a clone from **January 14, 2026**. It has diverged from GitHub (9 local commits vs 7 remote) and uses the old layout (`my-portfolio/src/...`). **Do not push from it** — it would undo the work you pushed in September.

## What changed here
- `src/pages/Projects.jsx`: ShipSignal added as the first featured project, with the real numbers (1.22% vs 1.80% repeat rate, 95% CI -0.92 to -0.24 pp, p = 0.004; assistant 27/40 to 35/40 across four prompt versions). Intro line reworded.
- `src/pages/Skills.jsx`: new "Statistics & LLM Applications" group (hypothesis testing, regression, SARIMA forecasting, RAG, LLM evaluation, SQL guardrails, FastAPI), and ShipSignal added to Postgres, dbt, data quality testing, GitHub Actions CI and Streamlit.
- `src/assets/resume.pdf`: replaced with the new master resume. The old file was from August 2025 and still showed a Bengaluru address, an Indian phone number and "incoming MS in data science candidate".

## Check it, then push
```
cd ~/nalluraj-portfolio/portfolio-current
npm install
npm run dev          # look at /projects, /skills, /resume
npm run build        # already passes
git add -A && git commit -m "Add ShipSignal, update skills and resume"
git push origin main
npm run deploy       # if you still publish from the gh-pages/dist flow
```
`npm run build` succeeded here. The two eslint warnings about `motion` were already in the repo before these edits.

## Still to check yourself
- The Projects page calls the IoT work "Published Research ... Published at IEEE" with an IEEE Xplore link. If it really was published in the proceedings, tell Claude: it belongs on your resume as a publication, which matters for research roles.
- The Projects page says the IoT work was "Prototyped on Raspberry Pi gateways and ESP32 nodes" but that repo only contains empty folders. Make sure you can back that up if asked.
- `docs/` here is the old build from January. If GitHub Pages serves from `docs/`, run the build into `docs/` before pushing.
