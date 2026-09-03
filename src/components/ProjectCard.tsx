import React, { useState } from 'react';
import {
  ExternalLink,
  Github,
  Award,
  Layers,
  Sparkles,
  Smartphone,
  Cpu,
  Terminal,
  TrendingUp,
  Plus,
  Play,
  RotateCcw,
  CheckCircle2,
} from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  // Interactive preview state for the cards
  const [expenseList, setExpenseList] = useState([
    { id: 1, title: 'Android Studio Cloud Build', amount: -14.99, cat: 'Dev Tools' },
    { id: 2, title: 'FlyRank AI Research Dataset', amount: -28.5, cat: 'AI' },
    { id: 3, title: 'Freelance Mobile UI Deliverable', amount: +250.0, cat: 'Income' },
  ]);
  const [mlInferenceRunning, setMlInferenceRunning] = useState(false);
  const [mlResultScore, setMlResultScore] = useState('94.8% Intent Match');

  const [promptInput, setPromptInput] = useState('Scaffold Kotlin MVVM Repository');
  const [promptOutput, setPromptOutput] = useState('class ExpenseRepositoryImpl @Inject constructor(private val dao: ExpenseDao) : ExpenseRepository { ... }');

  const [cppBenchmarkRunning, setCppBenchmarkRunning] = useState(false);
  const [cppTime, setCppTime] = useState('0.0042 ms');

  const handleSimulateML = (e: React.MouseEvent) => {
    e.stopPropagation();
    setMlInferenceRunning(true);
    setTimeout(() => {
      setMlInferenceRunning(false);
      const scores = ['96.2% High Search Relevance', '94.8% Intent Match', '98.1% Generative Engine Visibility'];
      setMlResultScore(scores[Math.floor(Math.random() * scores.length)]);
    }, 600);
  };

  const handleSimulatePrompt = (e: React.MouseEvent) => {
    e.stopPropagation();
    const presets = [
      { prompt: 'Generate FastAPI Model Inference Endpoint', out: '@app.post("/predict")\nasync def predict(data: InputSchema):\n    return model.inference(data.features)' },
      { prompt: 'Create Room Entity for Expense Tracker', out: '@Entity(tableName = "expenses")\ndata class ExpenseEntity(@PrimaryKey val id: UUID, val amount: Double)' },
      { prompt: 'C++ Custom AVL Tree Node Insertion', out: 'Node* insert(Node* node, int key) {\n  if (!node) return new Node(key);\n  // Balances factor...' },
    ];
    const chosen = presets[Math.floor(Math.random() * presets.length)];
    setPromptInput(chosen.prompt);
    setPromptOutput(chosen.out);
  };

  const handleSimulateCpp = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCppBenchmarkRunning(true);
    setTimeout(() => {
      setCppBenchmarkRunning(false);
      setCppTime((Math.random() * 0.005 + 0.001).toFixed(4) + ' ms');
    }, 400);
  };

  const handleAddExpense = (e: React.MouseEvent) => {
    e.stopPropagation();
    const items = [
      { title: 'Jetpack Compose Assets', amount: -9.99, cat: 'Design' },
      { title: 'UMT CS Textbooks', amount: -45.0, cat: 'Education' },
      { title: 'Coffee for Vibe Coding', amount: -4.5, cat: 'Personal' },
    ];
    const randomItem = items[Math.floor(Math.random() * items.length)];
    setExpenseList((prev) => [{ id: Date.now(), ...randomItem }, ...prev.slice(0, 2)]);
  };

  return (
    <div
      id={`project-card-${project.id}`}
      className="group rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-indigo-500/50 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-indigo-500/10 cursor-pointer"
      onClick={() => onSelect(project)}
    >
      {/* Visual Interactive Preview Box */}
      <div className={`p-4 bg-gradient-to-br ${project.gradientTheme} border-b border-slate-800/80 relative min-h-[220px] flex flex-col justify-between select-none`}>
        {/* Top Header info */}
        <div className="flex items-center justify-between z-10">
          <div className="flex items-center gap-1.5">
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-slate-950/80 border border-slate-700/80 text-indigo-300">
              {project.category}
            </span>
            {project.badge && (
              <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 flex items-center gap-1">
                <Award className="w-3 h-3" />
                {project.badge}
              </span>
            )}
          </div>
          <span className="text-[11px] font-mono text-slate-400 bg-slate-950/60 px-2 py-0.5 rounded">
            {project.completionDate}
          </span>
        </div>

        {/* Dynamic Project Preview UI Render */}
        <div className="my-auto py-2 z-10">
          {project.previewType === 'android-phone' && (
            <div className="bg-slate-950/95 rounded-xl border border-slate-800 p-3 shadow-lg space-y-2">
              <div className="flex items-center justify-between text-[11px] border-b border-slate-800/80 pb-1.5">
                <div className="flex items-center gap-1.5 font-bold text-emerald-400">
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>Expense Tracker Pro</span>
                </div>
                <button
                  onClick={handleAddExpense}
                  className="px-2 py-0.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded text-[10px] flex items-center gap-1 transition-colors"
                  title="Click to log a simulated expense"
                >
                  <Plus className="w-3 h-3" /> Add
                </button>
              </div>

              {/* Transactions List */}
              <div className="space-y-1">
                {expenseList.map((item) => (
                  <div key={item.id} className="flex items-center justify-between text-[11px] bg-slate-900/80 px-2 py-1 rounded">
                    <span className="text-slate-300 truncate max-w-[140px]">{item.title}</span>
                    <span className={item.amount > 0 ? 'text-emerald-400 font-mono font-medium' : 'text-slate-200 font-mono'}>
                      {item.amount > 0 ? `+$${item.amount.toFixed(2)}` : `-$${Math.abs(item.amount).toFixed(2)}`}
                    </span>
                  </div>
                ))}
              </div>
              <div className="text-[10px] text-slate-400 text-right font-mono">
                Kotlin • Jetpack Compose • Room DB
              </div>
            </div>
          )}

          {project.previewType === 'ml-pipeline' && (
            <div className="bg-slate-950/95 rounded-xl border border-slate-800 p-3 shadow-lg space-y-2 font-mono text-xs">
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-indigo-400 font-semibold flex items-center gap-1">
                  <Cpu className="w-3.5 h-3.5" />
                  {project.id === 'flyrank-ml-pipeline' ? 'FlyRank Search NLP' : 'FastAPI Model Inference'}
                </span>
                <button
                  onClick={handleSimulateML}
                  className="px-2 py-0.5 bg-indigo-600/30 hover:bg-indigo-600 text-indigo-200 hover:text-white border border-indigo-500/40 rounded text-[10px] flex items-center gap-1 transition-all"
                >
                  <Play className="w-2.5 h-2.5" /> {mlInferenceRunning ? 'Evaluating...' : 'Run Pipeline'}
                </button>
              </div>

              <div className="bg-slate-900 p-2 rounded border border-slate-800/80 text-[11px] space-y-1">
                <div className="text-slate-400 flex justify-between">
                  <span>Input: [Pandas DataFrame 50k rows]</span>
                  <span className="text-emerald-400 font-bold">{mlResultScore}</span>
                </div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-indigo-500 to-emerald-400 h-full w-4/5 animate-pulse" />
                </div>
              </div>
            </div>
          )}

          {project.previewType === 'prompt-terminal' && (
            <div className="bg-slate-950/95 rounded-xl border border-slate-800 p-3 shadow-lg space-y-2 font-mono text-xs">
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-purple-400 font-semibold flex items-center gap-1">
                  <Terminal className="w-3.5 h-3.5" />
                  Prompt2Dev Vibe Engine
                </span>
                <button
                  onClick={handleSimulatePrompt}
                  className="px-2 py-0.5 bg-purple-600/30 hover:bg-purple-600 text-purple-200 hover:text-white border border-purple-500/40 rounded text-[10px] flex items-center gap-1 transition-all"
                >
                  <RotateCcw className="w-2.5 h-2.5" /> Next Preset
                </button>
              </div>
              <div className="bg-slate-900 p-2 rounded text-[10px] text-slate-300 truncate">
                <span className="text-indigo-400">&gt; Prompt:</span> {promptInput}
              </div>
              <div className="bg-slate-900/60 p-2 rounded text-[10px] text-emerald-400 font-mono truncate">
                {promptOutput}
              </div>
            </div>
          )}

          {project.previewType === 'cpp-terminal' && (
            <div className="bg-slate-950/95 rounded-xl border border-slate-800 p-3 shadow-lg space-y-2 font-mono text-xs">
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-amber-400 font-semibold flex items-center gap-1">
                  <Terminal className="w-3.5 h-3.5" />
                  C++ Algorithmic Benchmark
                </span>
                <button
                  onClick={handleSimulateCpp}
                  className="px-2 py-0.5 bg-amber-600/30 hover:bg-amber-600 text-amber-200 hover:text-white border border-amber-500/40 rounded text-[10px] flex items-center gap-1 transition-all"
                >
                  <Play className="w-2.5 h-2.5" /> Benchmark
                </button>
              </div>
              <div className="bg-slate-900 p-2 rounded text-[10px] text-slate-300 space-y-1">
                <div className="flex justify-between">
                  <span>AVL Tree Balance vs Red-Black:</span>
                  <span className="text-emerald-400 font-bold">{cppBenchmarkRunning ? 'Computing...' : cppTime}</span>
                </div>
                <div className="text-slate-500 text-[9px]">Memory Leaks (Valgrind): 0 bytes in 0 blocks</div>
              </div>
            </div>
          )}

          {project.previewType === 'marketing-dashboard' && (
            <div className="bg-slate-950/95 rounded-xl border border-slate-800 p-3 shadow-lg space-y-2">
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-rose-400 font-semibold flex items-center gap-1">
                  <TrendingUp className="w-3.5 h-3.5" />
                  Growth Consulting Funnel
                </span>
                <span className="text-[10px] text-emerald-400 font-mono bg-emerald-500/10 px-1.5 py-0.5 rounded">
                  ROAS: 4.8x
                </span>
              </div>
              <div className="grid grid-cols-3 gap-1 text-[10px] text-center font-mono">
                <div className="bg-slate-900 p-1.5 rounded">
                  <div className="text-slate-400 text-[9px]">Conversion</div>
                  <div className="text-white font-bold">3.4%</div>
                </div>
                <div className="bg-slate-900 p-1.5 rounded">
                  <div className="text-slate-400 text-[9px]">CAC</div>
                  <div className="text-emerald-400 font-bold">$12.40</div>
                </div>
                <div className="bg-slate-900 p-1.5 rounded">
                  <div className="text-slate-400 text-[9px]">LTV:CAC</div>
                  <div className="text-indigo-400 font-bold">5.2:1</div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Action hint overlay */}
        <div className="text-[11px] text-slate-300/80 font-medium flex items-center justify-between pt-1">
          <span className="group-hover:text-white transition-colors">Click to view deep dive architecture</span>
          <span className="text-indigo-400 font-mono">&rarr;</span>
        </div>
      </div>

      {/* Card Content & Details */}
      <div className="p-5 sm:p-6 space-y-4 flex-1 flex flex-col justify-between">
        <div className="space-y-2">
          <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 line-clamp-2 leading-relaxed">
            {project.summary}
          </p>
        </div>

        {/* Tech Stack Pills */}
        <div className="space-y-3 pt-2">
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-slate-950 border border-slate-800 text-slate-300"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 4 && (
              <span className="px-2 py-1 text-[11px] font-mono rounded-md bg-slate-950 text-slate-400">
                +{project.techStack.length - 4} more
              </span>
            )}
          </div>

          {/* Card Footer Links */}
          <div className="flex items-center justify-between pt-3 border-t border-slate-800/80 text-xs">
            <span className="text-indigo-400 font-medium group-hover:underline flex items-center gap-1">
              Case Study & Details
            </span>

            <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
              {project.verifiedCertUrl && (
                <a
                  href={project.verifiedCertUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 text-slate-400 hover:text-emerald-400 bg-slate-950 rounded-lg border border-slate-800 transition-colors"
                  title="Verified Certificate Link"
                >
                  <Award className="w-4 h-4" />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 text-slate-400 hover:text-white bg-slate-950 rounded-lg border border-slate-800 transition-colors"
                  title="View GitHub Repository"
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
