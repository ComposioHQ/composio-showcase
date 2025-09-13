# Contributing to Built with Composio Showcase

Thank you for your interest in contributing to the Built with Composio Showcase! This showcase highlights amazing projects and applications built using Composio's powerful automation platform.

## How to Submit Your Project

We welcome contributions from the community! If you've built something awesome with Composio, we'd love to feature it in our showcase.

### Prerequisites

- Your project must use Composio in a meaningful way
- The project should be publicly accessible (GitHub repository, live demo, etc.)
- The project should be functional and well-documented

### Submission Process

1. **Fork this repository**
   ```bash
   git clone https://github.com/ComposioHQ/composio-showcase.git
   cd composio-showcase
   ```

2. **Add your project to the showcase**
   - Open `app/page.tsx`
   - Find the `projects` array
   - Add your project following this format:
   ```typescript
   {
     id: "unique-id",
     name: "Your Project Name",
     description: "A brief description of what your project does and how it uses Composio (2-3 sentences max).",
     url: "https://github.com/yourusername/your-project",
     topics: ["relevant", "tags", "for", "your-project"]
   }
   ```

3. **Project Information Guidelines**
   - **Name**: Use a clear, descriptive name
   - **Description**: Keep it concise (under 200 characters). Focus on what the project does and how Composio is used
   - **URL**: Link to your GitHub repository or live demo
   - **Topics**: Add 3-4 relevant tags (e.g., "ai", "automation", "slack", "gmail", "fastapi", etc.)

### Example Submission

```typescript
{
  id: "8",
  name: "Smart Email Assistant",
  description: "An AI-powered email assistant that automatically categorizes, responds to, and schedules emails using Composio's Gmail integration and OpenAI.",
  url: "https://github.com/yourusername/smart-email-assistant",
  topics: ["ai", "gmail", "assistant", "automation"]
}
```

### Quality Standards

Your project should demonstrate:
- **Functionality**: The project should work as described
- **Documentation**: Clear README with setup instructions
- **Code Quality**: Clean, well-organized code
- **Composio Integration**: Clear usage of Composio tools/agents

### What We're Looking For

- **Innovative use cases**: Creative applications of Composio
- **Different domains**: Projects spanning various industries and use cases
- **Various tech stacks**: Different programming languages and frameworks
- **Educational value**: Projects that help others learn Composio

### Submission Checklist

- [ ] Project uses Composio meaningfully
- [ ] Repository is public and accessible
- [ ] README includes clear setup instructions
- [ ] Project is functional
- [ ] Description is concise and informative
- [ ] Appropriate topics/tags are included
- [ ] Follow the project object format

### Review Process

1. Submit a pull request with your project addition
2. Our team will review your submission
3. We may ask for clarifications or improvements
4. Once approved, your project will be featured in the showcase!

### Guidelines for Descriptions

- Keep descriptions under 200 characters
- Focus on the problem your project solves
- Mention how Composio is used
- Avoid overly technical jargon
- Make it accessible to a general audience

### Need Help?

If you have questions about contributing or need help with your submission:

- Open an issue in this repository
- Join our [Discord community](https://discord.gg/composio)
- Check out [Composio documentation](https://docs.composio.dev)

## Code of Conduct

Please be respectful and constructive in all interactions. We're building a welcoming community for everyone interested in automation and AI.

## Recognition

Contributors will be recognized in our showcase and may be featured in:
- Composio blog posts
- Social media highlights
- Community newsletters
- Conference presentations

Thank you for helping us showcase the amazing things being built with Composio!

---

*Built with ❤️ by the Composio community*