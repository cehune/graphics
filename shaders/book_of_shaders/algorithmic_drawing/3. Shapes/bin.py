from math import cos, sin, exp, sqrt, pi, atan
import matplotlib.pyplot as plt
import numpy as np
#from InstantSplat.utils.sfm_utils import save_intrinsics, save_points3D, save_extrinsic, save_images_and_masks
def func(time):
    a = np.cos(20*time)
    b = np.cos(800 * time)

    c1 = (75 ** 2 / (75 ** 2 + 20 ** 2))
    c2 = (75 ** 2 / (75 ** 2 + 800 ** 2))
    c = (1 - c1 - c2) * np.exp(-75 * time)
    
    d = (75 / np.sqrt(75**2 + 20**2)) * np.cos(20*time - np.arctan(20/75))
    e = (75 / np.sqrt(75**2 + 800**2)) * np.cos(800*time - np.arctan(800/75))
    return a + b + c + d + e

if __name__ == '__main__':
    t = np.linspace(0, 1, 1000)
    y = func(t)

    # Plot
    plt.figure(figsize=(10, 4))
    plt.plot(t, y, label='func(t)')
    plt.title('Plot of Custom Function')
    plt.xlabel('Time (s)')
    plt.ylabel('Amplitude')
    plt.grid(True)
    plt.legend()
    plt.tight_layout()
    plt.show()
    #print(func(0.05))
    for i in range(0, 20):
        t = i / 20
        #print(f"at time = {t}, y = {(func(t))}")