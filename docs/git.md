# Git Commit 約定式提交格式與分類教學

在團隊合作中，使用一致的 Git commit 約定式提交格式可以讓版本管理更有結構、更具可讀性，並且便於自動化工具（如 CI/CD pipelines）進行分析、生成變更日誌（Changelog）等。本文將介紹如何使用約定式提交格式（Conventional Commits）來管理 Git 提交紀錄。

## 約定式提交格式

根據 [Conventional Commits](https://www.conventionalcommits.org/zh-hans/v1.0.0/) 規範，Git 提交訊息的格式如下：


- **type**：提交的類型，表示這次提交的主要目的或功能，必須使用預定義的關鍵字之一。
- **scope**：可選項，表示提交所影響的範疇或模組。如果提交影響的範疇不明確，可以省略。
- **message**：簡短且有意義的描述，說明這次提交的內容。

### 常見的 commit type 類型

| 類型    | 描述                                                           |
|---------|----------------------------------------------------------------|
| **feat** | 新增功能或特性                                                |
| **fix**  | 修復 Bug                                                      |
| **docs** | 只修改了文件，例如更新 README 或文檔                           |
| **style**| 代碼風格修改（不影響功能），例如格式化、空白字符的修改等     |
| **refactor** | 重構代碼（不涉及功能修改或修復），例如代碼優化、結構調整等 |
| **perf** | 提升效能的修改                                                |
| **test** | 增加或修改測試代碼                                            |
| **chore** | 其他雜項修改，例如更新依賴、構建工具的配置、腳本修改等       |
| **ci**   | 與持續集成相關的修改，例如修改 CI 配置文件                   |
| **build** | 改變項目構建系統或外部依賴（例如 npm、webpack）               |

### 提交訊息範例

```
<type>[scope]: <description> 
[body]
[footer(s)]
<類型>[作用範圍(選擇性填寫)]: <描述>
[正文(選擇性填寫)]
[腳註(選擇性填寫)]
```

### 提交訊息的規範

1. **標題格式**：提交訊息的標題應該簡潔明瞭，通常不超過 72 個字符。

2. **動詞時態**：標題應使用現在時態，表達「這次提交將會做什麼」，例如：
- 正確：`feat(auth): add login feature`
- 錯誤：`added login feature`

3. **描述內容**：標題應該能清楚表達這次提交的目的。如果需要，可以在標題後添加一個更詳細的描述（在下一行）。

4. **Breaking Changes**：若此次提交包含破壞性變更（breaking change），可以在標題或訊息正文中標註。
- 格式：`feat(auth): add login feature BREAKING CHANGE: changed authentication method`

5. **關聯 Issue**：若這次提交與某個 issue 相關，可以在提交訊息中加入關聯。
- 格式：`fix(auth): fix registration error closes #42`

### 常見的範例

```
feat(auth): add user login functionality

- Implemented user authentication with JWT tokens.
- Added login form with validation and error handling.
- Integrated authentication service with backend API.

closes #45
```

這個範例的結構如下：

* **type**: `feat`（代表新增功能）
* **scope**: `auth`（代表影響的範疇是「認證」模組）
* **description**: `add user login functionality`（簡短描述新增的功能）
* **body**: 描述具體的實現細節，列出修改的具體內容（如新增的功能或處理的問題）
* **footer**: 提供關聯的 issue 或是說明破壞性變更（`closes #45` 代表這次提交解決了第 45 號 issue）
