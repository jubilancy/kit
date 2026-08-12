# LLM Tool Discovery Prompt

You are an expert in browser-based and serverless LLM deployment tools.

I need you to find and recommend LLM tools that match these specific criteria:

## Deployment Requirements

- [ ] Can run purely via CDN script tags (no backend server required) **OR**
- [ ] Can be hosted serverlessly without managing infrastructure

## Cost Constraints

- [ ] Free or extremely low-cost
- [ ] Ideally free tier available
- [ ] No hidden paid-tier upsell

## Browser & Runtime Requirements

- [ ] Works in modern web browsers
- [ ] Preferably with WebGPU/WASM acceleration
- [ ] Offline-capable (caches model weights locally via IndexedDB/service workers)

## Model Support

Must support at least one of:
- [ ] Small-to-medium language models (3B–7B parameters, quantized)
- [ ] Full LLMs (Llama, Phi, Gemma, Mistral, Qwen, etc.)
- [ ] Open-weight models
- [ ] Vision models
- [ ] Embedding models

## Capabilities

Can perform at least one of:
- [ ] Text generation / completions
- [ ] Chat completions with streaming
- [ ] Sentiment analysis
- [ ] Translation
- [ ] Question answering
- [ ] Embeddings / RAG
- [ ] Image classification / captioning
- [ ] Speech-to-text

## Integration Methods

- [ ] Embeddable as `<script>` tag in HTML
- [ ] Callable via API from serverless functions (Cloudflare Workers, Vercel Edge, etc.)
- [ ] Works with fetch() / standard HTTP calls
- [ ] Supports function calling / structured output (JSON mode)

## Performance Requirements

- [ ] No cold starts (preferred)
- [ ] Minimal latency (< 500ms response time ideal)
- [ ] Streaming support for long-form generation

## Output Format

For each tool found, provide:

```
### Tool Name
- **Primary Use Case**: [one sentence]
- **CDN/Deployment URL**: [URL or N/A]
- **Supported Models**: [list]
- **Key Features**: [bullet list]
- **Trade-offs/Limitations**: [bullet list]
- **Best Fit Scenario**: [description]
- **Free Tier Limits**: [specifics]
```

## Context

Focus on tools that fit a **budget-conscious, free-tier-first architecture pattern** suitable for:
- Personal tools / hobby projects
- Self-hosted infrastructure
- Minimal operational overhead
- No vendor lock-in preferred

---

**Start by searching for tools matching the above criteria, then present findings organized by deployment category (CDN-based, Serverless API, Hybrid).**
