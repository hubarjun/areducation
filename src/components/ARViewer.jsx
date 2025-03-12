import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "@google/model-viewer";

const ARViewer = () => {
  const { modelId } = useParams();

  // Example model URLs - in a real app, these would come from your backend
  const models = {
    1: {
      src: "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
      title: "Human Anatomy",
    },
    2: {
      src: "https://modelviewer.dev/shared-assets/models/NeilArmstrong.glb",
      title: "Solar System",
    },
    3: {
      src: "https://modelviewer.dev/shared-assets/models/RobotExpressive.glb",
      title: "Mechanical Engine",
    },
  };

  const model = models[modelId];

  useEffect(() => {
    // Ensure model-viewer is properly defined
    if (!customElements.get("model-viewer")) {
      customElements.define(
        "model-viewer",
        window.ModelViewer.ModelViewerElement
      );
    }
  }, []);

  return (
    <div className="h-screen w-full flex flex-col my-6">
      <div className="flex-1 relative">
        <model-viewer
          src={model.src}
          alt={model.title}
          ar
          ar-modes="scene-viewer webxr quick-look"
          camera-controls
          auto-rotate
          style={{ width: "100%", height: "100%" }}
        >
          <button className="hidden" slot="ar-button">
            <p>Launch AR</p>
          </button>
        </model-viewer>
      </div>

      <div className=" flex-1 p-4 flex justify-center flex-col">
        <h2 className="text-xl font-bold my-6">{model.title}</h2>
        <button
          onClick={() => {
            console.log("hello");
            const modelViewer = document.querySelector("model-viewer");
            modelViewer.activateAR();
          }}
          className="px-4 py-2  bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          <p className="text-white-500 font-bold tracking-wider  text-sm ">
            Launch AR
          </p>
        </button>
      </div>
    </div>
  );
};

export default ARViewer;
