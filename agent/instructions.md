เครื่องมือ AI
ประสิทธิภาพการทำงานของนักพัฒนา
การเขียนโค้ด
แบ่งปัน:
ทีมวิศวกรรมซอฟต์แวร์ที่ใช้สถาปัตยกรรมคำแนะนำ AI แบบมีโครงสร้าง สามารถทำงานเขียนโปรแกรมและแก้ไขข้อผิดพลาดได้เร็วกว่าวิธีการพื้นฐานที่ไม่มีตัวช่วยถึง 55% การนำคำแนะนำ AI แบบมีโครงสร้างมาใช้ในการพัฒนาซอฟต์แวร์ เปลี่ยนการทดลองเติมข้อความอัตโนมัติที่ไม่สามารถคาดเดาได้ ให้กลายเป็นเวิร์กโฟลว์ทางวิศวกรรมที่ทำซ้ำได้

จากผลสำรวจของ Stack Overflow Developer Survey เกี่ยวกับการนำเครื่องมือ AI มาใช้และความเชื่อมั่นพบว่า 84% ของนักพัฒนาซอฟต์แวร์ใช้หรือวางแผนที่จะใช้เครื่องมือเขียนโค้ด AI ในขั้นตอนการทำงานประจำวัน อย่างไรก็ตาม ความเชื่อมั่นในผลลัพธ์จาก AI ที่ยังไม่ได้รับการตรวจสอบนั้นลดลงเหลือประมาณ 29% โดย 66% ของวิศวกรรายงานว่าพวกเขาใช้เวลาเพิ่มเติมในการแก้ไขข้อผิดพลาดในโค้ดที่ไม่แม่นยำ แม้ว่าจะดูเหมือนถูกต้องก็ตาม

ประเด็นสำคัญ

กรอบโครงสร้างคำถามแบบ 5 องค์ประกอบ (บทบาท บริบท งาน ข้อจำกัด และแบบแผนผลลัพธ์) ช่วยขจัดปัญหาภาพหลอนในโมเดลล้ำสมัย เช่น Claude Sonnet 5 และ GPT-5.6 Sol
แบบสำรวจนักพัฒนาของ Stack Overflow ยืนยันว่า 84% ของนักพัฒนาใช้เครื่องมือ AI แต่ความเชื่อมั่นในความถูกต้องแม่นยำโดยตรงอยู่ที่ 29% ซึ่งทำให้จำเป็นต้องมีการตรวจสอบความถูกต้องโดยใช้การทดสอบเป็นตัวขับเคลื่อนในทุกๆ คำถาม
การให้ข้อมูลการติดตามการทำงานของโปรแกรมอย่างละเอียด สภาพแวดล้อมการทำงาน และสถานะตัวแปรต่างๆ ช่วยแก้ไขข้อผิดพลาดที่ซับซ้อนได้ในเวลาเพียงไม่กี่วินาที แทนที่จะใช้เวลาหลายชั่วโมง
การกำหนดค่าคำสั่งระดับระบบ (.github/copilot-instructions.md และกฎ Cursor) จะบังคับใช้ขอบเขตทางสถาปัตยกรรมและความปลอดภัยของประเภทข้อมูลทั่วทั้งคลังเก็บข้อมูล
การก้าวข้ามคำแนะนำทั่วไปนั้น จำเป็นต้องมองแบบจำลองภาษาเป็นพันธมิตรทางวิศวกรรมเฉพาะทางที่ต้องการบริบททางนิติวิทยาศาสตร์ที่สมบูรณ์และขอบเขตที่ชัดเจน แทนที่จะค้นหาพรอมต์ chatgpt ที่ดีที่สุดแบบทั่วไปซึ่งให้ตัวอย่างแบบผิวเผิน วิศวกรซอฟต์แวร์ต้องการสถาปัตยกรรมพรอมต์ที่แม่นยำ คู่มือนี้มีพรอมต์พร้อมใช้งาน 50 รายการ จัดเรียงตามขั้นตอนการพัฒนาจริง พร้อมด้วยช่องบริบททางนิติวิทยาศาสตร์และเกณฑ์การตรวจสอบที่ขับเคลื่อนด้วยการทดสอบ

อะไรคือปัจจัยที่ทำให้ AI Prompt มีประสิทธิภาพสำหรับการเขียนโค้ด? (กรอบแนวคิด)
การออกแบบคำถาม AI ที่มีประสิทธิภาพสำหรับงานวิศวกรรมซอฟต์แวร์นั้น จำเป็นต้องมีบริบทที่มีโครงสร้างมากกว่าคำถามปลายเปิด โมเดลภาษาขาดความเข้าใจเกี่ยวกับความสัมพันธ์ระหว่างที่เก็บข้อมูล ตัวแปรสภาพแวดล้อม และการกำหนดค่าขณะทำงาน เว้นแต่ว่านักพัฒนาจะระบุไว้อย่างชัดเจน การทำความเข้าใจวิธีการเขียนคำถามสำหรับโมเดล chatgpt และ frontier จำเป็นต้องเปลี่ยนจุดสนใจจากการสนทนาแบบสบายๆ ไปสู่การกำหนดข้อกำหนดที่เข้มงวด

การปฏิบัติต่อผู้ช่วย AI เสมือนวิศวกรอาวุโสที่เพิ่งเข้ามาทำงานใหม่ ช่วยให้เข้าใจข้อกำหนดด้านการสื่อสารได้ชัดเจนยิ่งขึ้น วิศวกรที่เพิ่งเข้ามาทำงานใหม่ไม่สามารถแก้ไขปัญหาความล้มเหลวของระบบได้หากไม่มีข้อมูลการติดตามการทำงานของระบบอย่างละเอียด ข้อมูลข้อผิดพลาด การพึ่งพาของระบบต้นทาง และพฤติกรรมที่คาดหวังเทียบกับพฤติกรรมที่เกิดขึ้นจริง

กรอบคำสั่งแบบ 5 องค์ประกอบต่อไปนี้จะให้บริบทที่จำเป็นสำหรับการสร้างโค้ดที่สามารถทำซ้ำได้:

บทบาท:กำหนดความเชี่ยวชาญทางเทคนิคและมุมมองที่จำเป็น (ตัวอย่างเช่น "ทำหน้าที่เป็นสถาปนิกระบบ Python หลัก")
บริบท:ระบุเวอร์ชันภาษา เฟรมเวิร์กที่ใช้งานอยู่ สภาพแวดล้อมการทำงาน และรายละเอียดการติดตามข้อผิดพลาดทั้งหมด
ภารกิจ:อธิบายรายละเอียดผลลัพธ์ทางวิศวกรรมที่เป็นรูปธรรม หรือวัตถุประสงค์ของการตรวจสอบ
ข้อจำกัด:บังคับใช้ข้อจำกัดของไลบรารี กฎความปลอดภัยของประเภท งบประมาณด้านความหน่วง หรือข้อกำหนดที่ไม่มีการพึ่งพาใดๆ
รูปแบบผลลัพธ์:กำหนดโครงสร้างการนำเสนอ (บล็อกแสดงความแตกต่าง, โครงสร้าง JSON หรือขั้นตอนการแก้ไขที่มีหมายเลขกำกับ)
คำถามแบบไม่เป็นโครงสร้าง (คลุมเครือ)	คำถามกระตุ้นความคิดทางวิศวกรรมที่มีโครงสร้าง (เชื่อถือได้)
“แก้ไขข้อผิดพลาดในโค้ดนี้”	“สมมติว่าเป็นวิศวกร Python ระดับอาวุโส เกิดข้อผิดพลาด TypeError ที่บรรทัดที่ 42 ระหว่างการผสานรวม Strapi 5 ข้อผิดพลาด: TypeError: Cannot read property 'id' of undefined. บริบทของโค้ด: [วาง 20 บรรทัด] สิ่งที่คาดหวัง: ส่งคืนรหัสผู้ใช้ สิ่งที่เกิดขึ้นจริง: โปรแกรมหยุดทำงานเนื่องจากเพย์โหลดเป็นค่าว่าง แนะนำสาเหตุหลัก 3 ประการและวิธีแก้ไข”
“ฉันจะปรับปรุงสิ่งนี้ให้ดียิ่งขึ้นได้อย่างไร?”	“วิเคราะห์ฟังก์ชัน TypeScript นี้เพื่อหาจุดคอขวดด้านความหน่วงในการประมวลผลอาร์เรย์ที่มีจำนวนรายการเกิน 100,000 รายการ โค้ด: [วาง] เสนอแนะการปรับปรุงเพื่อลดความซับซ้อนของเวลาให้เหลือ O(n) อธิบายข้อแลกเปลี่ยนด้านหน่วยความจำ”
“เขียน Unit Test”	“สร้าง unit test ด้วย Vitest สำหรับตัวจัดการการตรวจสอบสิทธิ์นี้ ทดสอบเงื่อนไขขอบเขต: อินพุตเป็นค่าว่าง, สตริงอีเมลที่ผิดรูปแบบ, รูปแบบการโจมตี SQL injection และเซสชันที่ถูกต้อง โค้ด: [วาง]”
ทีมที่นำวิธีการที่มีโครงสร้างนี้มาใช้จะหลีกเลี่ยงข้อผิดพลาดทั่วไปของการสร้าง AI ที่ไม่มีทิศทาง งานวิจัยที่บันทึกไว้ในรายงานการวิจัยประสิทธิภาพการทำงานของนักพัฒนา GitHub Copilotแสดงให้เห็นว่า นักพัฒนาที่ให้ข้อจำกัดเชิงบริบทที่ชัดเจนจะทำงานเขียนโปรแกรมเสร็จเร็วกว่านักพัฒนาที่ไม่มีทิศทางถึง 55%

สำหรับทีมวิศวกรรมที่ต้องการสร้างโครงสร้างข้อความแจ้งเตือนเหล่านี้ให้เป็นสคริปต์ที่นำกลับมาใช้ใหม่ได้ คู่มือของเราเกี่ยวกับรูปแบบโค้ดเทมเพลตข้อความแจ้งเตือนที่นำกลับมาใช้ใหม่ได้แสดงให้เห็นถึงรูปแบบการจัดรูปแบบ Python แบบไดนามิกสำหรับเวิร์กโฟลว์การผลิต นอกจากนี้ ทีมประกันคุณภาพโดยเฉพาะที่ตรวจสอบชุดทดสอบ ความครอบคลุมของเงื่อนไขขอบเขต และประตูตรวจสอบความถูกต้องของ CI/CD สามารถใช้ประโยชน์จากข้อความแจ้งเตือน AI สำหรับวิศวกร QA ที่เราจัดทำขึ้นโดยเฉพาะ ได้

1. ข้อความแจ้งเตือนสำหรับการดีบักและแก้ไขปัญหา (10 ข้อความ)
การแก้ไขข้อผิดพลาดขณะรันไทม์ถือเป็นวิธีเพิ่มประสิทธิภาพการทำงานที่ได้ผลทันทีที่สุดเมื่อใช้โมเดลล้ำสมัย แทนที่จะตรวจสอบร่องรอยการทำงานของโปรแกรมและค้นหาข้อมูลในฟอรัมที่ล้าสมัย นักพัฒนาสามารถระบุสาเหตุที่แท้จริงได้ภายในเวลาไม่ถึง 60 วินาที อย่างไรก็ตาม โมเดลเหล่านี้ต้องการหลักฐานทางนิติวิทยาศาสตร์ที่มีโครงสร้าง รวมถึงเวอร์ชันของสภาพแวดล้อม ข้อมูลข้อผิดพลาดทั้งหมด และตัวแปรสถานะที่ใช้งานอยู่

แม่แบบการแก้ไขข้อผิดพลาดทั้ง 10 แบบต่อไปนี้ ให้โครงสร้างหลักฐานที่จำเป็นสำหรับการวิเคราะห์หาสาเหตุที่แท้จริงอย่างละเอียด

ข้อความแจ้งเตือนการวินิจฉัยข้อผิดพลาด (ข้อความแจ้งเตือน #1-3)
#1: วินิจฉัยข้อความแสดงข้อผิดพลาดนี้

Act as an expert debugging consultant specializing in [language/framework].

CONTEXT:
- Language/Framework: [e.g., Python 3.11 with FastAPI 0.110]
- Error Type: [e.g., TypeError, AttributeError, RuntimeError]
- Full Error Message: [Paste exact error including line numbers]
- Stack Trace: [Paste complete stack trace from bottom to top]
- Relevant Code (with line numbers):
  [Paste 15-30 lines: 10 before error, error line, 5-10 after]

TASK - Analyze using this process:

Step 1: IDENTIFY THE FAILURE POINT
- Exact line number and operation that failed
- What value/type caused the error
- Expected vs. actual value

Step 2: TRACE ROOT CAUSE
- Work backwards from error line
- Identify where problematic value originated
- Explain the causal chain

Step 3: PROPOSE SOLUTIONS
Provide exactly 3 solutions ranked by likelihood.

OUTPUT FORMAT:

## Root Cause Analysis
**Failure Point:** Line [X] - [operation that failed]
**Why It Failed:** [Explanation]
**Origin:** [Where bad value came from]

## Solution 1: [Title] (90% likely)
**Fix:** [Show before/after code]
**Why it works:** [Explanation]
**Time:** [5/15/30 min]
**Side effects:** [None/describe]

## Solution 2: [Title] (70% likely)
[Same structure]

## Solution 3: [Title] (50% likely)
[Same structure]

## Verification
- [ ] Error gone with original input
- [ ] Edge case tested: [specify]
- [ ] No new errors introduced
สำเนา
กรณีการใช้งาน:เมื่อคุณพบข้อความแสดงข้อผิดพลาดที่ไม่คุ้นเคย ใช้งาน
ได้ดีที่สุดกับ: Claude Sonnet 5 (เก่งเรื่องการจดจำรูปแบบข้อผิดพลาด)
เคล็ดลับ:ควรใส่ข้อมูลการติดตามการทำงานทั้งหมด ไม่ใช่แค่ข้อความแสดงข้อผิดพลาด - AI ต้องการข้อมูลการทำงานทั้งหมด

#2: แก้ไขข้อผิดพลาด TypeError/NoneType นี้

You are a senior [language] debugging specialist focusing on type safety.

CONTEXT:
- Error: '[exact error text]'
- Code causing error: [paste 20-30 lines including error line + context]
- Stack trace: [paste complete trace]
- Expected type: [e.g., Dict[str, Any]]
- Actual type received: [e.g., NoneType or str]
- Source of value: [e.g., API response, database query, user input]

TASK - Analyze this type mismatch:

Step 1: ROOT CAUSE IDENTIFICATION
Trace where the incorrect type originates:
- Is it from external input (API, DB, user)?
- Is it from internal function logic?
- Is there a missing validation step?

Step 2: WHY THIS HAPPENED
Explain the failure scenario:
- What condition causes [Expected] to be [Actual] instead?
- Is this an edge case or common scenario?
- Why didn't existing checks catch this?

Step 3: DEFENSIVE FIXES
Provide 3 solutions with increasing robustness.

OUTPUT FORMAT:

## Root Cause
[Where the NoneType/wrong type originates]

## Failure Scenario
[What specific condition triggers this]

## Solution 1: Immediate Fix (5 minutes)
**What to change:** [Add type checking at point of error]
**Code:** [Show before/after with defensive check]

## Solution 2: Proper Validation (15 minutes - Recommended)
**What to change:** [Validate at data entry point]
**Code:** [Show input validation approach]

## Solution 3: Type Safety Enhancement (30 minutes)
**What to change:** [Implement type system improvements]
**Code:** [Show type-safe version with hints/runtime validation]

## Prevention Strategy
To avoid this in future:
- [Specific type checking pattern to adopt]
- [Tool recommendation: mypy, TypeScript strict, etc.]
สำเนา
กรณีการใช้งาน:บั๊กที่เกี่ยวข้องกับประเภทข้อมูลที่ไม่ชัดเจนในทันที
เหมาะสมที่สุดกับ: GPT-5.6 Sol (เหมาะที่สุดสำหรับการวิเคราะห์ระบบประเภทข้อมูล)
เคล็ดลับ:ควรระบุทั้งประเภทข้อมูลที่คาดหวังและประเภทข้อมูลจริงเสมอ - ช่วยให้ AI เข้าใจความไม่ตรงกันได้ดีขึ้น

#3: การวิเคราะห์สาเหตุหลักของปัญหาที่เกิดขึ้นเป็นระยะๆ

You are a production debugging specialist expert in diagnosing intermittent, environment-specific bugs.

CONTEXT:
- Symptom: [What fails - be specific]
- Frequency: [X times per hour/day/week]
- Occurrence pattern: [Random / Time-based / Load-based / User-specific]
- Impact: [System behavior when bug occurs]
- Error logs (last 5 occurrences): [paste with timestamps]

ENVIRONMENT COMPARISON:
Production: [PM2 cluster, 4 workers | Redis cluster | PostgreSQL pool: 20]
Local: [nodemon single process | In-memory cache | Direct DB connection]
Traffic: [Production: 10K req/hour | Local: 10 req/hour]

TASK - Systematic diagnosis:

Step 1: PATTERN DETECTION
Analyze error logs for patterns:
- Are errors clustered in time?
- Do errors correlate with specific inputs?
- Are certain servers/workers more affected?

Step 2: HYPOTHESIS GENERATION
For each possible cause, provide:
- Root cause theory
- Why it only happens in production
- Expected symptoms (match actual?)
- Probability estimate (%)

Step 3: DIAGNOSTIC STRATEGY
For each hypothesis, specify how to confirm/rule out.

OUTPUT FORMAT:

## Pattern Analysis
[Your findings from error logs]

## Top 5 Hypotheses (Ranked by Probability)

### 1. [Cause Name] - 60% probability
**Theory:** [What's happening]
**Why production only:** [Environment factor]
**Evidence for:** [What supports this]
**To diagnose:** [Specific logging to add or test to run]
**To reproduce locally:** [Steps to simulate production condition]

### 2-5. [Same structure]

## Immediate Actions
1. Add these logs (to narrow down next occurrence): [specific log statements]
2. Monitor these metrics: [list metrics]

## Long-term Prevention
[Architectural changes to prevent this class of issues]
สำเนา
กรณีการใช้งาน:ปัญหาการแข่งขัน (Race conditions), ปัญหาการทำงานแบบอะซิงโครนัส, บั๊กเฉพาะสภาพแวดล้อม
เหมาะสมที่สุดกับ: GPT-5.6 Sol (การให้เหตุผลเชิงตรรกะที่แข็งแกร่งที่สุดสำหรับสถานการณ์ที่ซับซ้อน)
เคล็ดลับ:ระบุเวลาที่แน่นอนและรายละเอียดของสภาพแวดล้อม - รูปแบบต่างๆ จะปรากฏจากข้อมูล

คำแนะนำด้านประสิทธิภาพและการเพิ่มประสิทธิภาพ (คำแนะนำข้อที่ 4-7)
#4: ระบุจุดที่ก่อให้เกิดปัญหาด้านประสิทธิภาพ

Act as a performance engineer specializing in [language].

CONTEXT:
- Target function: [paste code]
- Scale: processing [e.g., 1 million records]
- Current speed: [X ms/sec]
- Target speed: [Y ms/sec]
- Hardware/Runtime: [e.g., Node.js 20 on 2vCPU]

TASK - Identify and resolve bottlenecks:

Step 1: HOT PATH ANALYSIS
Identify the exact operations consuming the most CPU cycles or memory.

Step 2: OPTIMIZATION STRATEGIES
Provide 3 specific optimizations:
1. Low-hanging fruit (quick wins)
2. Algorithmic change (highest impact)
3. Micro-optimization (edge case gains)

Step 3: BENCHMARKING
Suggest how to measure the improvement.

OUTPUT FORMAT:

## Bottleneck Analysis
[Identify the slowest parts of the code]

## Optimization 1: [Short Title]
**Change:** [Description]
**Expected Gain:** [e.g., 20%]
**Code:** [indented example]

## Optimization 2 & 3: [Same structure]

## Verification
- [ ] Measure before/after with [Tool]
- [ ] Stress test with [Input Size]
สำเนา
กรณีใช้งาน:เมื่อฟังก์ชันของคุณทำงานได้ แต่ช้าเกินไป
เหมาะที่สุดกับ: Claude Opus 5 (การวิเคราะห์ที่ละเอียดที่สุด)

#5: แก้ไขปัญหาหน่วยความจำรั่วไหล

Act as a memory management expert for [language/runtime].

CONTEXT:
- Symptoms: [describe memory growth, e.g., "heap grows linearly"]
- Duration: [how long before OOM]
- Code: [paste relevant blocks - include closures, event listeners, loops]
- Environment: [e.g., Browser/Node.js/JVM]

TASK - Root cause analysis:

Step 1: LEAK IDENTIFICATION
Find where references are being held unnecessarily.

Step 2: FIX RECOMMENDATION
Provide the most surgical fix to release memory.

Step 3: PREVENTION
Suggest a pattern to avoid this in the future.

OUTPUT FORMAT:

## Root Cause
[Explain why memory isn't being garbage collected]

## Fix Recommendation
**Step 1:** [Action]
**Step 2:** [Action]
**Code:** [Clear before/after]

## Success Metric
- Monitor [Heap/RSS] over [Time]
สำเนา
กรณีการใช้งาน:หน่วยความจำเพิ่มขึ้นอย่างไม่มีขีดจำกัดเมื่อเวลาผ่านไป
เหมาะสำหรับ: GPT-5.6 Sol (มีความเชี่ยวชาญในการวิเคราะห์ลูปเหตุการณ์และการปิดระบบ)

#6: ปรับปรุงประสิทธิภาพการสืบค้นฐานข้อมูล

You are a database performance expert specializing in [database: PostgreSQL/MySQL/etc.].

CONTEXT:
- Database: [PostgreSQL 14 / MySQL 8.0 / etc.]
- Table size: [X million rows]
- Query execution time: [Y seconds - target: Z seconds]
- Slow query: [paste complete SQL]
- Current indexes: [list all indexes on relevant tables]
- EXPLAIN output: [paste if available]
- Query frequency: [how often this runs]

TASK - Optimize this query:

Step 1: ANALYZE CURRENT PERFORMANCE
- Identify full table scans
- Find missing or unused indexes
- Detect inefficient JOINs
- Check for N+1 query patterns

Step 2: PROPOSE OPTIMIZATIONS
Provide 3-4 optimization strategies ranked by impact.

Step 3: INDEX STRATEGY
Recommend specific indexes with justification.

OUTPUT FORMAT:

## Performance Analysis
**Current bottlenecks:** [What's slow and why]
**EXPLAIN insights:** [Key findings from query plan]

## Optimization 1: [Strategy Name] (Expected: 70% faster)
**Change:** [What to modify in the query]
**Optimized Query:**
[Paste improved SQL]
**Why faster:** [Explanation]
**Trade-offs:** [Any downsides]

## Optimization 2-3: [Same structure]

## Recommended Indexes
**Index 1:** CREATE INDEX idx_name ON table(column1, column2);
**Justification:** [Why this index helps]
**Impact:** [Estimated improvement]

## Additional Recommendations
- Query caching strategy
- Denormalization opportunities (if applicable)
- Partitioning considerations (for very large tables)
สำเนา
กรณีการใช้งาน:การทำงานของฐานข้อมูลช้า
เหมาะสำหรับ: Claude Sonnet 5 (ความรู้ด้าน SQL ขั้นสูง)
เคล็ดลับ:ควรแสดงผลลัพธ์จากคำสั่ง EXPLAIN เสมอ เพราะจะแสดงให้เห็นอย่างชัดเจนว่าจุดที่เป็นคอขวดอยู่ที่ใด

#7: ลดความซับซ้อนด้านเวลา

Act as a computer science professor specializing in algorithms.

CONTEXT:
- Current Algorithm: [paste code]
- Current Complexity: O([current])
- Target Complexity: O([target])
- Input Type/Size: [describe constraints]

TASK - Optimize the logic:

Step 1: ALGORITHMIC SUBSTITUTION
Suggest a different algorithm or data structure (e.g., Hash Map vs Array).

Step 2: SPACE-TIME TRADE-OFF
Analyze if using more memory can reduce execution time.

OUTPUT FORMAT:

## Theoretical Improvement
**From:** O([current])
**To:** O([target])

## Proposed Change
[Detailed explanation of the new approach]

## Implementation
[Optimized pseudocode or actual code]
สำเนา
กรณีการใช้งาน:การเพิ่มประสิทธิภาพเชิงอัลกอริทึม
เหมาะสมที่สุดกับ: GPT-5.6 Sol (เหมาะที่สุดสำหรับแนวคิดเชิงทฤษฎีด้านวิทยาการคอมพิวเตอร์)

ข้อความแจ้งเตือนการแก้ไขข้อผิดพลาดด้านความปลอดภัย (ข้อความแจ้งเตือน #8-10)
#8: ค้นหาช่องโหว่ด้านความปลอดภัย

Act as a cybersecurity professional conducting a static analysis review.

CONTEXT:
- Language: [language]
- Focus: [SQLi, XSS, CSRF, etc.]
- Code: [paste code]

TASK - Scan for vulnerabilities:

Step 1: VULNERABILITY DETECTION
Identify lines that allow untrusted input to hit sensitive sinks.

Step 2: EXPLOIT DEMO
Describe how an attacker would trigger the issue.

Step 3: OWASP MITIGATION
Provide the standard fix.

OUTPUT FORMAT:

## Vulnerability: [Name]
**Severity:** [High/Medium/Low]
**Attack Vector:** [Description]
**Fixed Code:** [indented fixed version]
สำเนา
กรณีการใช้งาน:การตรวจสอบความปลอดภัยก่อนการใช้งานจริง
เหมาะที่สุดกับ: Claude Opus 5 (ระมัดระวังและละเอียดถี่ถ้วนที่สุด)
คำเตือน:ควรให้ผู้เชี่ยวชาญด้านความปลอดภัยตรวจสอบรหัสการตรวจสอบสิทธิ์/การอนุญาตที่สำคัญเสมอ

#9: ตรวจสอบความเสี่ยงจากการโจมตีแบบ SQL Injection

Act as a database security specialist.

CONTEXT:
- DB Driver: [e.g., pg-node / mysql2]
- Input Source: [e.g., req.body.username]
- Code: [paste code]

TASK - Audit for SQL Injection:

Step 1: INPUT TRACING
Follow the input from source to the final query execution.

Step 2: PARAMETERIZATION CHECK
Verify if variables are escaped or using bound parameters.

OUTPUT FORMAT:

## Risk Level: [Critical/Safe]
**Finding:** [Direct string concatenation found at Line X]
**Secure Rewrite:** [Properly parameterized query]
สำเนา
กรณีการใช้งาน:ก่อนการใช้งานฟีเจอร์ฐานข้อมูลที่ผู้ใช้เข้าถึงได้
เหมาะสำหรับ: Claude Sonnet 5

#10: ตรรกะการตรวจสอบสิทธิ์

Act as an Identity and Access Management (IAM) security expert.

CONTEXT:
- Auth Flow: [e.g., JWT Login]
- Code: [paste login/session logic]
- Tech: [e.g., Passport.js / custom auth]

TASK - Security review of auth logic:

Step 1: CRYPTO CHECK
Verify hashing algorithms (bcrypt/argon2) and salt rounds.

Step 2: SESSION SECURITY
Check for cookie flags (HttpOnly/Secure) or JWT expiry/rotation.

OUTPUT FORMAT:

## Security Findings
1. [Missing Rate Limiting]
2. [Weak Hashing]
3. [Infinite Session Duration]

## Recommended Fixes
[Step-by-step hardened code]
สำเนา
กรณีศึกษา:การตรวจสอบการใช้งานระบบยืนยันตัวตน
ใช้งานร่วมกับ: Claude Opus 5 ได้ดีที่สุด

ผู้ช่วย AI สามารถระบุช่องโหว่ด้านความปลอดภัยทั่วไปจำนวนมากได้ในระหว่างขั้นตอนการตรวจสอบเบื้องต้น เช่น การขาดการตรวจสอบความถูกต้องของข้อมูลขาเข้า หรือการอ้างอิงวัตถุโดยตรงที่ไม่ปลอดภัย อย่างไรก็ตาม การตรวจสอบด้วยข้อความแจ้งเตือนอัตโนมัติไม่สามารถทดแทนการทดสอบการเจาะระบบและการสร้างแบบจำลองภัยคุกคามอย่างครอบคลุมได้ ทีมวิศวกรรมใช้ข้อความแจ้งเตือนของ AI เป็นชั้นการคัดกรองเบื้องต้นที่รวดเร็วขึ้น ไม่ใช่การทดแทนการตรวจสอบด้านความปลอดภัย