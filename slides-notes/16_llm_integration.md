- Ollama — Setup & Usage
    - Install Ollama
    
    ```
    ollama serve                              # start the server (127.0.0.1:11434)
    ollama list                               # models already on disk
    ollama run mistral                        # load mistral and open the chat
    ollama stop mistral                       # unload mistral from memory
    
    #Mac
    osascript -e 'quit app "Ollama"'          # quit the menu-bar app
    killall ollama                            # kill ollama serve if it is still running
    
    #Windows
    taskkill /IM "ollama app.exe" /F
    taskkill /IM ollama.exe /F
    ```
    
    In the n8n canvas search for `ollama chat model`
    
    To add an account just need to mention url as `http://localhost:11434`
    
    Make sure to select the model which is already downloaded —> If not will throw error
    
    !image.png
    
- OpenAI API Key — Setup & Usage
    - Go to https://platform.openai.com/api-keys
    - Do login and create an api key
    - In the n8n canvas search for `OpenAI Chat Model`
    - Add credential
    - Make sure to use the model which consumes less token
- Gemini API Key — Setup & Usage
    - Go to https://aistudio.google.com/api-keys
    - Do login and create an api key
    - In the n8n canvas search for `OpenAI Chat Model`
    - Add credential
    - Make sure to use the model which consumes less token
- Claude API Key — Setup & Usage
    - Go to https://platform.claude.com/settings/keys
    - Do login and create an api key
    - In the n8n canvas search for `Anthropic Chat Model`
    - Add credential
    - Make sure to use the model which consumes less token
- Groq API Key — Setup & Usage
    - Go to https://console.groq.com/keys
    - Do login and create an api key
    - In the n8n canvas search for `Groq Chat Model`
    - Add credential
    - Make sure to use the model which consumes less token